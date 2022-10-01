import React, { ReactElement, useEffect } from 'react';
import useScreenSizeBoundary from '../../../hooks/useScreenSizeBoundary';
import useWindowSize from '../../../hooks/useWindowSize';
import { useStoreActions, useStoreState } from '../../../store/store';
import { AutoCustomSetting } from './AutoCustomSetting';
import {
  HighlightCheckboxSetting,
  RecursionCheckboxSetting,
  HUDCheckboxSetting,
  AutosaveSetting,
} from './CheckboxSettings';
import DropDown from '../../../models/keyboardDropDownFolder/keyboardDropDown';
import { ContrastInputSetting } from './ContrastInputSetting';
import { SettingsColumnContainer } from './SettingsColumnContainer';
import { SettingsForm } from './SettingsForm';
import { SettingsHeader } from './SettingsHeader';
import { CustomTrainingSettingsBox } from './CustomTrainingSettingsBox';
import TrainingControls from './TrainingControls';
import styled from 'styled-components';
import HelpCircleIcon from './HelpCircleIcon';

function TrainingModeSelector(): ReactElement {

  const beginTraining = useStoreActions((store: any) => store.beginTrainingMode);
  

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
    return (
      <React.Fragment>
      <ItemsContainer>
      <button className="m-2" onClick={() => LearnPageFunction('ALPHABET')}>Letters</button>
      <div>/</div>
      <button className="m-2" onClick={() => LearnPageFunction('TRIGRAM')}>Trigrams</button>
      <div>/</div>
      <button className="m-2" onClick={() => LearnPageFunction('LEXICAL')}>Words</button>
      <div>/</div>
      <button className="m-2" onClick={() => TestPageFunction('LEXICAL', 25)}>Test</button>
      </ItemsContainer>
      </React.Fragment>
  );
}

export default TrainingModeSelector;


const ItemsContainer = styled.div `
height: 50px;
display: flex;
color: white;
position: relative;
flex-direction: row;
padding: '1rem';  
justify-content: center; 
align-items: center; 
`