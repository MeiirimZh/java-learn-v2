// Загружает список курсов из локальной SQLite-базы данных и отслеживает состояние загрузки
// Предоставляет данные курсов и методы для их обновления через кастомный хук
import { useState, useEffect } from "react";
import { useSQLiteContext } from "expo-sqlite";

import { Course } from "../../types";

const useCourses = () => {
    const [ courses, setCourses ] = useState<Course[]>([]);
    const [ loading, setLoading ] = useState<boolean>(true);
    const db = useSQLiteContext();

    const loadCourses = async () => {
        try {
            const results = await db.getAllAsync<Course>("SELECT * FROM courses ORDER BY id;");
            setCourses(results);
        }
        catch (error) {
            console.log("Database error: ", error);
        }
        finally {
            setLoading(false);
        }
    };
    
    useEffect(() => {
        loadCourses();
    }, []);
    
    return { courses, setCourses, loading };
};

export default useCourses;