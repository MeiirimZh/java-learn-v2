import { Lecture, LabWork } from "../../types"

export type LecturesStackParamList = {
    LecturesList: undefined,
    ViewLecture: {
        lecture: Lecture
    }
    Task1: undefined,
    Task2: undefined,
    Task3: undefined,
    Task4: undefined,
    Task5: undefined,
    Task6: undefined,
    Task7: undefined,
    Task8: undefined,
    Task9: undefined,
    Task10: undefined,
    Task11: undefined
};

export type LabWorksStackParamList = {
    LabWorksList: undefined,
    ViewLabWork: {
        labWork: LabWork
    }
};

export type AuthStackParamList = {
    Login: undefined,
    Register: undefined
}