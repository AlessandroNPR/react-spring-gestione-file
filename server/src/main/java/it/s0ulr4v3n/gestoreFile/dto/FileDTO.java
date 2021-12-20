package it.s0ulr4v3n.gestoreFile.dto;

public class FileDTO {
    private String fileName;
    private byte[] doc;

    public FileDTO(String fileName, byte[] doc) {
        this.fileName = fileName;
        this.doc = doc;
    }

    public String getFileName() {
        return fileName;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName;
    }

    public byte[] getDoc() {
        return doc;
    }

    public void setDoc(byte[] doc) {
        this.doc = doc;
    }
}
