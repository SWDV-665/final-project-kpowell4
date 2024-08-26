import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference} from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  tasksRef: AngularFirestoreCollection

  constructor( private db: AngularFirestore) { 
    this.tasksRef = this.db.collection('task');
  }

  addTask(task: any): Promise<DocumentReference>{
    return this.tasksRef.add(task);
  }
  
  getAllTask(): AngularFirestoreCollection<any>{
    return this.tasksRef;
  }

  updateTask(id:string, task:any): Promise<void>{
    return this.tasksRef.doc(id).update(task);
  }

  deleteTask(id:string): Promise<void>{
    return this.tasksRef.doc(id).delete();
  }
}
