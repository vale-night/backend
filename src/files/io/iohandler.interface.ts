export interface IOHandler {
    saveFile: (file: Express.Multer.File, dirName: string, fileName: string) => Boolean;
    getFile: (key: string) => Buffer;
    removeFile: (key: string) => Boolean;
}