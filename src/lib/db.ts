import { openDB, IDBPDatabase } from 'idb';

export interface BookingData {
  id?: number;
  name: string;
  phone: string;
  email: string;
  service: string;
  date: string;
  time: string;
  address: string;
  description: string;
  timestamp: number;
  type: 'booking';
}

export interface ContactData {
  id?: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: number;
  type: 'contact';
}

export type InquiryData = BookingData | ContactData;

const DB_NAME = 'lil-green-plumbing-db';
const STORE_NAME = 'inquiries';

let dbPromise: Promise<IDBPDatabase>;

export const initDB = () => {
  if (!dbPromise) {
    dbPromise = openDB(DB_NAME, 1, {
      upgrade(db) {
        if (!db.objectStoreNames.contains(STORE_NAME)) {
          const store = db.createObjectStore(STORE_NAME, {
            keyPath: 'id',
            autoIncrement: true,
          });
          store.createIndex('timestamp', 'timestamp');
          store.createIndex('type', 'type');
        }
      },
    });
  }
  return dbPromise;
};

export const saveInquiry = async (data: Omit<InquiryData, 'id' | 'timestamp'>) => {
  try {
    const db = await initDB();
    const inquiry = {
      ...data,
      timestamp: Date.now(),
    };
    console.log("Saving inquiry to IndexedDB:", inquiry);
    const result = await db.add(STORE_NAME, inquiry);
    console.log("Inquiry saved successfully with ID:", result);
    return result;
  } catch (error) {
    console.error("Error saving inquiry to IndexedDB:", error);
    throw error;
  }
};

export const getAllInquiries = async (): Promise<InquiryData[]> => {
  const db = await initDB();
  return db.getAllFromIndex(STORE_NAME, 'timestamp');
};

export const deleteInquiry = async (id: number) => {
  const db = await initDB();
  return db.delete(STORE_NAME, id);
};
