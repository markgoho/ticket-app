import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';

import { BackendService } from '../../backend.service';
import { getUsersStart, getUsersSuccess, getUsersFail } from './users.actions';

@Injectable()
export class UsersEffects {
  getUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getUsersStart),
      switchMap(() =>
        this.backend.users().pipe(
          map(users => getUsersSuccess({ users })),
          catchError(() => of(getUsersFail()))
        )
      )
    )
  );

  // initializeOrder$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(initializeOrderStart),
  //     switchMap(({ body }) =>
  //       this.cartService.initializeOrder(body).pipe(
  //         concatMap((response: JsonApiInitializeOrderResponse) => {
  //           // How many orders are going to return here? Why is this an array?
  //           const [orderData] = response.data;
  //           const [orderSummaryData] = response.included.filter(
  //             responseData => responseData.type === 'order_summary'
  //           );

  //           const orderSummaryVM: OrderSummaryVM = {
  //             id: (orderSummaryData as OrderSummaryData).id,
  //             ...(orderSummaryData as OrderSummaryData).attributes
  //           };

  //           const orderVM: OrderVM = {
  //             id: orderData.id,
  //             ...orderData.attributes
  //           };

  //           return [
  //             initializeOrderSuccess({
  //               order: orderVM,
  //               orderSummary: orderSummaryVM
  //             }),
  //             getAvailablePickupSlotsStart({ orderId: orderVM.id })
  //           ];
  //         }),
  //         catchError(() => of(initializeOrderFail()))
  //       )
  //     )
  //   )
  // );

  // applyPromoCode$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(applyPromoCodeStart),
  //     switchMap(({ body }) =>
  //       this.cartService.applyPromoCodeToOrder(body).pipe(
  //         map((response: JsonApiPromoCodeResponse) => {
  //           const orderType = response.data.relationships.order.data.type;

  //           const [orderData] = response.included.filter(
  //             responseData => responseData.type === orderType
  //           );

  //           const [orderSummaryData] = response.included.filter(
  //             responseData => responseData.type === 'order_summary'
  //           );

  //           const orderSummaryVM: OrderSummaryVM = {
  //             id: (orderSummaryData as OrderSummaryData).id,
  //             ...(orderSummaryData as OrderSummaryData).attributes
  //           };

  //           const orderVM: OrderVM = {
  //             id: (orderData as OrderData).id,
  //             ...(orderData as OrderData).attributes
  //           };
  //           return applyPromoCodeSuccess({
  //             order: orderVM,
  //             orderSummary: orderSummaryVM
  //           });
  //         }),
  //         catchError(() => of(applyPromoCodeFail()))
  //       )
  //     )
  //   )
  // );

  // getAvailableDeliverySlots$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(getAvailableDeliverySlotsStart),
  //     switchMap(({ orderId }) =>
  //       this.cartService.getAvailableDeliverySlots(orderId).pipe(
  //         concatMap((response: JsonApiAvailableSlots) => {
  //           const rawSlots: AvailableSlotData[] = response.data
  //             .filter(
  //               (data: AvailableSlotData) => data.type === 'delivery_slot'
  //             )
  //             .sort((a: AvailableSlotData, b: AvailableSlotData) => {
  //               return a.attributes.start_time.localeCompare(
  //                 b.attributes.start_time
  //               );
  //             });

  //           const availableDays: AvailableDay[] = parseAvailableSlots(rawSlots);

  //           return [
  //             getAvailableDeliverySlotsSuccess({ availableDays }),
  //             setChosenSlot({ chosenSlot: availableDays[0].slots[0] })
  //           ];
  //         }),
  //         catchError(e => of(getAvailableDeliverySlotsFail()))
  //       )
  //     )
  //   )
  // );

  // getAvailableSatelliteSlots$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(getAvailableSatelliteSlotsStart),
  //     switchMap(({ orderId }) =>
  //       this.cartService.getAvailableSatelliteSlots(orderId).pipe(
  //         concatMap((response: JsonApiAvailableSlots) => {
  //           const rawSlots: AvailableSlotData[] = response.data
  //             .filter((data: AvailableSlotData) => data.type === 'local_slot')
  //             .sort((a: AvailableSlotData, b: AvailableSlotData) => {
  //               return a.attributes.start_time.localeCompare(
  //                 b.attributes.start_time
  //               );
  //             });

  //           const availableDays: AvailableDay[] = parseAvailableSlots(rawSlots);

  //           return [
  //             getAvailableSatelliteSlotsSuccess({ availableDays }),
  //             setChosenSlot({ chosenSlot: availableDays[0].slots[0] })
  //           ];
  //         }),
  //         catchError(e => of(getAvailableSatelliteSlotsFail()))
  //       )
  //     )
  //   )
  // );

  // getAvailablePickupSlots$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(getAvailablePickupSlotsStart),
  //     switchMap(({ orderId }) =>
  //       this.cartService.getAvailablePickupSlots(orderId).pipe(
  //         concatMap((response: JsonApiAvailableSlots) => {
  //           const rawSlots: AvailableSlotData[] = response.data
  //             .filter(data => data.type === 'in_store_slot')
  //             .sort((a: AvailableSlotData, b: AvailableSlotData) => {
  //               return a.attributes.start_time.localeCompare(
  //                 b.attributes.start_time
  //               );
  //             });

  //           const availableDays: AvailableDay[] = parseAvailableSlots(rawSlots);

  //           return [
  //             getAvailablePickupSlotsSuccess({ availableDays }),
  //             setChosenSlot({ chosenSlot: availableDays[0].slots[0] })
  //           ];
  //         }),
  //         catchError(e => of(getAvailablePickupSlotsFail()))
  //       )
  //     )
  //   )
  // );

  // placeOrder$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(placeOrderStart),
  //     switchMap(({ body, order, orderType }) =>
  //       this.cartService.placeOrder(body, order, orderType).pipe(
  //         // We're not concerned about the response
  //         map(() => placeOrderSuccess({ order })),
  //         catchError(() => of(placeOrderFail()))
  //       )
  //     )
  //   )
  // );

  constructor(private actions$: Actions, private backend: BackendService) {}
}
