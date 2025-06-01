import { useState } from 'react'

import EditorPanel from './components/EditorPanel'
import PreviewPanel from './components/PreviewPanel'

import { headerInitialData } from './components/headerInitialData'
import { experienceInitialData } from './components/experienceInitialData';

function App() {
	const [headerData, setHeaderData] = useState(headerInitialData);
	const [experienceData, setExperienceData] = useState(experienceInitialData);

	const onHeaderChange = (e, idx1) => {
		setHeaderData(headerData.map((f, idx2) => 
		idx1 === idx2 ? { ...f, value: e.target.value } : f
		));
	}

	const onExperienceDelete = (toDeleteId) => {
		const parentId = getParentId(toDeleteId, experienceData);
		if (!parentId) throw new Error("Unable to find the parent of the element with ID " + toDeleteId);

		setExperienceData({
			...experienceData,
			[parentId]: {
				...experienceData[parentId],
				childIds: experienceData[parentId].childIds.filter(id => id != toDeleteId)
			}
		});

		experienceRecursiveDelete(experienceData, toDeleteId);
	}

	const onExperienceChange = (e, id, field) => {
		const newVal = e.target.type === "checkbox" ? e.target.checked : e.target.value;
		setExperienceData({
			...experienceData,
			[id]: {
				...experienceData[id],
				[field]: newVal,
			},
		});

	}

	const onExperienceAdd = (parentId, type) => {
		const id = crypto.randomUUID();
		const newObj = typeToFactory[type](id);
		setExperienceData({
			...experienceData,
			[id]: newObj,
			[parentId]: {...experienceData[parentId], childIds: [...experienceData[parentId].childIds, id]},
		});
	}

	return (
		<>
		<EditorPanel
			headerData={headerData}
			onHeaderChange={onHeaderChange}
			experienceData={experienceData}
			onExperienceDelete={onExperienceDelete}
			onExperienceChange={onExperienceChange}
			onExperienceAdd={onExperienceAdd}
		/>
		<PreviewPanel headerData={headerData} experienceData={experienceData}/>
		</>
	)
}

export default App

const typeToFactory = {
	"experience": experienceFactory,
	"achievement": achievementAndDescFactory,
	"description": achievementAndDescFactory,
}

function getParentId(toDeleteId, experienceData) {
	for (const [idx, obj] of Object.entries(experienceData)) {
		if (obj.childIds.includes(toDeleteId)) {
			return idx;
		}
	}
}

function experienceRecursiveDelete(experienceData, id) {
	if (!experienceData[id]) return;

	experienceData[id].childIds.forEach(childId => {
		experienceRecursiveDelete(childId);
	});
		
	delete experienceData[id];
}

function experienceFactory(objId) {
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

function achievementAndDescFactory(objId) {
	return {
        id: objId,
        content: "",
        childIds: []
    }
}


