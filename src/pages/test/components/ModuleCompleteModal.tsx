import React, { useState, ReactElement } from 'react';
import { useStoreState, useStoreActions } from '../../../store/store';


function ModuleCompleteModal () : ReactElement {

  const moduleNumber = useStoreState((store : any) => store.moduleNumber);
  const trainingLevel = useStoreState((store : any) => store.trainingLevel);
  const moduleCompleteModalToggle = useStoreState((store : any) => store.moduleCompleteModalToggle);
  const setModuleCompleteModalToggle = useStoreActions((store : any) => store.setModuleCompleteModalToggle);
  const beginTraining = useStoreActions((store: any) => store.beginTrainingMode);
  const setModuleNumber = useStoreActions((store: any) => store.setModuleNumber);

  function LearnPageFunction (value: string){
    const payload : any [] = []
    payload.push(value);
    sessionStorage.removeItem("tempTestDeIncrement");
    beginTraining(payload);
  }

  function TestPageFunction (value: string, testLength : any){
    const payload : any [] = [];
    payload.push(value);
    payload.push(testLength);
    sessionStorage.removeItem("tempTestDeIncrement");
    sessionStorage.removeItem('Refresh');
    sessionStorage.setItem("CustomNonRefresh", JSON.stringify(1))
    sessionStorage.removeItem("tempTestDeIncrement");
    beginTraining(payload);
 
  }

  function selectTheTrainingMode(){
    if(trainingLevel == 'CPM'){ 
      if(moduleNumber < 4){
        if(moduleNumber+1 == 2){
          LearnPageFunction('TRIGRAM')
        } else if(moduleNumber+1 == 3){
          LearnPageFunction('LEXICAL')
        } else if(moduleNumber+1 == 4){
          TestPageFunction('LEXICAL', 26);
        }
    }    
    setModuleNumber(moduleNumber+1);
  } else if (trainingLevel == 'CHM'){
      if(moduleNumber < 4){
        if(moduleNumber+1 == 2){
          LearnPageFunction('LEXICAL')
        } else if(moduleNumber+1 == 3){
          LearnPageFunction('LEXICAL')
        } 
        setModuleNumber(moduleNumber+1);

    }
  }
  }

  return (
    <React.Fragment>
      {moduleCompleteModalToggle ? 
    <div className='flex-row border-zinc-400 border-4	left-56 rounded-xl absolute ml-80 mt-24 justify-center h-2/5 bg-white'>
      <button className="close absolute ml-96 text-5xl pt-4 text-[#181818]" onClick={() => [setModuleCompleteModalToggle(!moduleCompleteModalToggle)]}>
            &times;
          </button>
    <p className='pt-4 m-10 font-bold '>Congratulations!</p>
    <p className=' ml-10 mr-10'>You have completed the current module!</p>
    <p className=' ml-10 mr-10 '>Press &lsquo;Continue&rsquo; below to move on to the next Module,</p>
    <p className=' ml-10 mr-10 mb-10'>Or press &lsquo;X&rsquo; to continue practicing.</p>
    <button className='drop-shadow-2xl right-arrow text-white rounded inline-block p-2 ml-36 focus bg-[#333] hover:bg-[#3b3b3b] active:bg-[#222]' onClick={() => [selectTheTrainingMode(), setModuleCompleteModalToggle(!moduleCompleteModalToggle)]}> Move To Next Module</button>
    </div> 
    : null
    }
    </React.Fragment>
  );
};

export default ModuleCompleteModal;