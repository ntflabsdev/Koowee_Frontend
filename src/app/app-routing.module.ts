import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  // {
  //   path: 'home',
  //   loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  // },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
   {
    path: 'profile/:id',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'notifications',
    loadChildren: () => import('./notifications/notifications.module').then( m => m.NotificationsPageModule)
  },
  {
    path: 'edit-profile',
    loadChildren: () => import('./edit-profile/edit-profile.module').then( m => m.EditProfilePageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'places-interests',
    loadChildren: () => import('./places-interests/places-interests.module').then( m => m.PlacesInterestsPageModule)
  },
  {
    path: 'explore-map',
    loadChildren: () => import('./explore-map/explore-map.module').then( m => m.ExploreMapPageModule)
  },
  {
    path: 'my-trips',
    loadChildren: () => import('./my-trips/my-trips.module').then( m => m.MyTripsPageModule)
  },
  {
    path: 'new-trip',
    loadChildren: () => import('./new-trip/new-trip.module').then( m => m.NewTripPageModule)
  },
  {
    path: 'places-of-interests',
    loadChildren: () => import('./places-of-interests/places-of-interests.module').then( m => m.PlacesOfInterestsPageModule)
  },
  {
    path: 'place-interest-details/:id',
    loadChildren: () => import('./place-interest-details/place-interest-details.module').then( m => m.PlaceInterestDetailsPageModule)
  },
  {
    path: 'trip-details/:id',
    loadChildren: () => import('./trip-details/trip-details.module').then( m => m.TripDetailsPageModule)
  },
  {
    path: 'interest-filters',
    loadChildren: () => import('./interest-filters/interest-filters.module').then( m => m.InterestFiltersPageModule)
  },
  {
    path: 'emergency-button',
    loadChildren: () => import('./emergency-button/emergency-button.module').then( m => m.EmergencyButtonPageModule)
  },
  {
    path: 'add-contact',
    loadChildren: () => import('./add-contact/add-contact.module').then( m => m.AddContactPageModule)
  },
  {
    path: 'add-step-map',
    loadChildren: () => import('./add-step-map/add-step-map.module').then( m => m.AddStepMapPageModule)
  },
  {
    path: 'add-new-step',
    loadChildren: () => import('./add-new-step/add-new-step.module').then( m => m.AddNewStepPageModule)
  },
  {
    path: 'step-details/:id',
    loadChildren: () => import('./step-details/step-details.module').then( m => m.StepDetailsPageModule)
  },
  {
    path: 'add-new-trip2',
    loadChildren: () => import('./add-new-trip2/add-new-trip2.module').then( m => m.AddNewTrip2PageModule)
  },
  {
    path: 'add-new-step3',
    loadChildren: () => import('./add-new-step3/add-new-step3.module').then( m => m.AddNewStep3PageModule)
  },
  {
    path: 'reset-password/:id',
    loadChildren: () => import('./reset-password/reset-password.module').then( m => m.ResetPasswordPageModule)
  },
  {
    path: 'change-password/:email/:otp',
    loadChildren: () => import('./change-password/change-password.module').then( m => m.ChangePasswordPageModule)
  },
  {
    path: 'search-trip',
    loadChildren: () => import('./search-trip/search-trip.module').then( m => m.SearchTripPageModule)
  },
  {
    path: 'add-trip-mid',
    loadChildren: () => import('./add-trip-mid/add-trip-mid.module').then( m => m.AddTripMidPageModule)
  },
  {
    path: 'edit-single-trip/:id',
    loadChildren: () => import('./edit-single-trip/edit-single-trip.module').then( m => m.EditSingleTripPageModule)
  },
  {
    path: 'discovery',
    loadChildren: () => import('./discovery/discovery.module').then( m => m.DiscoveryPageModule)
  },
  {
    path: 'future-connect',
    loadChildren: () => import('./future-connect/future-connect.module').then( m => m.FutureConnectPageModule)
  },
  {
    path: 'connected-user/:id',
    loadChildren: () => import('./connected-user/connected-user.module').then( m => m.ConnectedUserPageModule)
  },
  {
    path: 'chat-room/:id',
    loadChildren: () => import('./chat-room/chat-room.module').then( m => m.ChatRoomPageModule)
  },
  {
    path: 'places-map',
    loadChildren: () => import('./places-map/places-map.module').then( m => m.PlacesMapPageModule)
  },
  {
    path: 'all-places',
    loadChildren: () => import('./alll-favourites/alll-favourites.module').then( m => m.AlllFavouritesPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'subscription',
    loadChildren: () => import('./subscription/subscription.module').then( m => m.SubscriptionPageModule)
  },
 
  {
    path: 'add-step-map2',
    loadChildren: () => import('./add-step-map2/add-step-map2.module').then( m => m.AddStepMap2PageModule)
  },
  {
    path: 'add-step-map2',
    loadChildren: () => import('./add-step-map2/add-step-map2.module').then( m => m.AddStepMap2PageModule)
  },
  {
    path: 'connections',
    loadChildren: () => import('./connections/connections.module').then( m => m.ConnectionsPageModule)
  },
  {
    path: 'connected-user-profile/:id',
    loadChildren: () => import('./connected-user-profile/connected-user-profile.module').then( m => m.ConnectedUserProfilePageModule)
  }






];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
