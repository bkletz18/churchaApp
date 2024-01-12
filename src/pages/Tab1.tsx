// Your main component file (e.g., MainPage.tsx)
import React from 'react';
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenu,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
} from '@ionic/react';

import './Tab1.css'; // Import the global stylesheet

function MainPage() {
  return (
    <IonPage>
      {/* Header Section */}
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle className="header-title">Christ Church RS</IonTitle>
        </IonToolbar>
      </IonHeader>

      {/* Menu Section */}
      <IonMenu contentId="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Christ Church</IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonMenu>

      {/* Main Content Section */}
      <IonContent className="main-content">
        {/* About Section */}
        <IonCard className="about-card">
          <IonCardHeader>
            <IonCardTitle>About Us</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>
              Welcome to Christ Church RS, where we are committed to [Brief Description of the Church]. Our mission is to
              [Mission Statement].
            </p>
          </IonCardContent>
        </IonCard>

        <IonCard className="contact-card"  routerLink="/contact">
          <IonCardHeader>
            <IonCardTitle>Contact Us</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>
              If you have any questions or need more information, feel free to reach out to us. We would love to hear
              from you!
            </p>
            <p>Email: [Your Email]</p>
            <p>Phone: [Your Phone Number]</p>
          </IonCardContent>
        </IonCard>

        <IonCard className="contact-card">
          <IonCardHeader>
            <IonCardTitle>Staff</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>
              If you have any questions or need more information, feel free to reach out to us. We would love to hear
              from you!
            </p>
            <p>Email: [Your Email]</p>
            <p>Phone: [Your Phone Number]</p>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
}

export default MainPage;
