import { useState } from 'react'

import EditorPanel from './components/EditorPanel'
import PreviewPanel from './components/PreviewPanel'

import { headerInitialData } from './components/headerInitialData'
import { experienceInitialData } from './components/experienceInitialData';
import { projectInitialData } from './components/projectInitialData';

function App() {
	const [headerData, setHeaderData] = useState(headerInitialData);
	const [experienceData, setExperienceData] = useState(experienceInitialData);
	const [projectData, setProjectData] = useState(projectInitialData);

	const typeToState = {
		"experience": { state: experienceData, setState: setExperienceData },
		"project": { state: projectData, setState: setProjectData },
	}

	const onHeaderChange = (e, idx1) => {
		setHeaderData(headerData.map((f, idx2) => 
			idx1 === idx2 ? { ...f, value: e.target.value } : f
		));
	}

	const onItemDelete = (itemType, toDeleteId) => {
		const {state, setState} = typeToState[itemType];

		const parentId = getParentId(toDeleteId, state);
		if (!parentId) throw new Error("Unable to find the parent of the element with ID " + toDeleteId);

		setState({
			...state,
			[parentId]: {
				...state[parentId],
				childIds: state[parentId].childIds.filter(id => id != toDeleteId)
			}
		});

		itemRecursiveDelete(state, toDeleteId);
	}

	const onItemChange = (itemType, e, id, field) => {
		const {state, setState} = typeToState[itemType];
		const newVal = e.target.type === "checkbox" ? e.target.checked : e.target.value;

		setState({
			...state,
			[id]: {
				...state[id],
				[field]: newVal,
			},
		});
	}

	const onItemAdd = (itemType, parentId, itemLevel) => {
		const {state, setState} = typeToState[itemType];
		const id = crypto.randomUUID();
		const newObj = levelToFactory[itemLevel](id);

		setState({
			...state,
			[id]: newObj,
			[parentId]: {...state[parentId], childIds: [...state[parentId].childIds, id]},
		});
	}

	return (
		<>
		<EditorPanel
			headerData={headerData}
			onHeaderChange={onHeaderChange}
			experienceData={experienceData}
			projectData={projectData}
			onItemDelete={onItemDelete}
			onItemChange={onItemChange}
			onItemAdd={onItemAdd}
		/>
		<PreviewPanel headerData={headerData} experienceData={experienceData} projectData={projectData}/>
		</>
	)
}

export default App

const levelToFactory = {
	"item": itemFactory,
	"subitem": subitemFactory,
	"subsubitem": subitemFactory,
}

function getParentId(toDeleteId, experienceData) {
	for (const [idx, obj] of Object.entries(experienceData)) {
		if (obj.childIds.includes(toDeleteId)) {
			return idx;
		}
	}
}

function itemRecursiveDelete(itemData, id) {
	if (!itemData[id]) return;

	itemData[id].childIds.forEach(childId => {
		itemRecursiveDelete(childId);
	});
		
	delete itemData[id];
}

function itemFactory(objId) {
	return {
		id: objId,
        title: "",
        startDate: "",
        endDate: "",
        present: false,
        role: "",
        location: "",
        childIds: [],
    }
}

function subitemFactory(objId) {
	return {
        id: objId,
        content: "",
        childIds: []
    }
}


