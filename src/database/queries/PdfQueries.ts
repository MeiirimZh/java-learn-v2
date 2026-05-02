export const CREATE_TABLE = `
    CREATE TABLE IF NOT EXISTS pdf (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        file_id TEXT NOT NULL
    );
`;

export const INSERT = `
    INSERT INTO pdf (title, file_id) VALUES
    (?, ?);
`;

export const DROP_TABLE = `
    DROP TABLE IF EXISTS pdf;
`;