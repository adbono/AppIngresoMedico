import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FichaCardioService {

  constructor(private firestore: AngularFirestore) { }

  agregarFicha(ficha: any): Promise<any>{
    return this.firestore.collection('fichacardio').add(ficha)
  }

  getFichas(): Observable<any>{
    return this.firestore.collection('fichacardio', ref => ref.orderBy('fecha','asc')).snapshotChanges()
  }

  eliminarFicha(id: string): Promise<any>{
    return this.firestore.collection('fichacardio').doc(id).delete();
  }

  getFicha(id: string): Observable<any>{
    return this.firestore.collection('fichacardio').doc(id).snapshotChanges()
  }

  actualizarFicha(id: string, data: any){
    return this.firestore.collection('fichacardio').doc(id).update(data);
  }

  getFactoresRiesgo(): Observable<any>{
    return this.firestore.collection('factoresriesgo').snapshotChanges()
  }
}
