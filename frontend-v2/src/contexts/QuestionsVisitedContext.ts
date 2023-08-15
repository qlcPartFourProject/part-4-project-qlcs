import { createContext, useContext } from "react";
import { QuizStatus } from "../utils/enums/QuizStatus";

interface QuestionsVisitedContextType {
    questionsVisited: number[],
    setQuestionsVisited: (questionsVisited: number[]) => void,
}

const defaultQuestionsVisitedContext = {
    questionsVisited: [],
    setQuestionsVisited: (questionsVisited: number[]) => {},
};

export const QuestionsVisitedContext = createContext<QuestionsVisitedContextType>(defaultQuestionsVisitedContext);
export const useQuizStatusContext = () => useContext(QuestionsVisitedContext);