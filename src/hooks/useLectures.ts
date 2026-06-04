// Загружает лекции выбранного языка из локальной SQLite-базы данных и отслеживает состояние загрузки
// Автоматически обновляет список лекций при смене языка
import { useState, useEffect } from "react";
import { useSQLiteContext } from "expo-sqlite";

import { Lecture, Language } from "../../types";

const useLectures = (lang: Language) => {
    const [ lectures, setLectures ] = useState<Lecture[]>([]);
    const [ loading, setLoading ] = useState<boolean>(true);
    const db = useSQLiteContext();
    
    const loadLectures = async () => {
        try {
            let query;

            switch (lang) {
                case "ru":
                    query = "SELECT * FROM lectures_ru ORDER BY id;";
                    break;
                case "kz":
                    query = "SELECT * FROM lectures_kz ORDER BY id;";
                    break;
                default:
                    throw new TypeError("Invalid language");
            }

            const results = await db.getAllAsync<Lecture>(query);
            setLectures(results);
        }
        catch (error) {
            console.log("Database error: ", error);
        }
        finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadLectures();
    }, [lang]);

    return { lectures, setLectures, loading };
};

export default useLectures;