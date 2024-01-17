import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Sermons</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Sermons</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 2 page" />
        
        <IonList>
          <IonItem>
            <IonLabel>Sermon 1</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Sermons 2</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Sermon 3</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Sermons 4 </IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Sermon 5</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
