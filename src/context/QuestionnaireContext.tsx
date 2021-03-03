import React, { useContext } from 'react';
import { QuestionnaireService } from '../services/QuestionnaireService';
import { LocalStorageService } from '../services/StorageService';

const localStorageService = new LocalStorageService();

export const questionnaireService = new QuestionnaireService(localStorageService);

export const QuestionnaireContext = React.createContext<QuestionnaireService>(questionnaireService);

export const useQuestionnaire = () => {
    return useContext(QuestionnaireContext);
}