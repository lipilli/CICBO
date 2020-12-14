/**
 * CICBO
 * This is the API of CICBO - CICBO is a Corona Business Optimizer.  By Deborah Djon and Ferdinand Koenig for Web Engineering 2 at Cooperative State University Stuttgart (DHBW Stuttgart)  Lecturer: Danny Amor (DXC)
 *
 * OpenAPI spec version: 2.1
 * Contact: inf19211@lehre.dhbw-stuttgart.de
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';

import { Guest } from '../model/guest';
import { GuestwId } from '../model/guestwId';
import { SearchObject } from '../model/searchObject';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class GuestService {

    protected basePath = 'http://localhost:3000';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * Add a new guest
     *
     * @param guest Guest object that needs to be added to the guest list
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public addGuest(guest: Guest, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public addGuest(guest: Guest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public addGuest(guest: Guest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public addGuest(guest: Guest, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (guest === null || guest === undefined) {
            throw new Error('Required parameter guest was null or undefined when calling addGuest.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<any>(`${this.basePath}/guest`,
            guest,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress,

            }

        );
    }

    /**
     * Deletes a guest
     *
     * @param guestId guest id to delete
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteGuest(guestId: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public deleteGuest(guestId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public deleteGuest(guestId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public deleteGuest(guestId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (guestId === null || guestId === undefined) {
            throw new Error('Required parameter guestId was null or undefined when calling deleteGuest.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.delete<any>(`${this.basePath}/guest/${encodeURIComponent(String(guestId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Finds guests
     *
     * @param searchFilter Search filter object
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public findGuests(searchFilter: SearchObject, observe?: 'body', reportProgress?: boolean): Observable<Array<GuestwId>>;
    public findGuests(searchFilter: SearchObject, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<GuestwId>>>;
    public findGuests(searchFilter: SearchObject, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<GuestwId>>>;
    public findGuests(searchFilter: SearchObject, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (searchFilter === null || searchFilter === undefined) {
            throw new Error('Required parameter searchFilter was null or undefined when calling findGuests.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.get<Array<GuestwId>>(`${this.basePath}/guest/find`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Find guest by ID
     * Returns a single guest
     * @param guestId ID of guest to return
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getGuestById(guestId: number, observe?: 'body', reportProgress?: boolean): Observable<GuestwId>;
    public getGuestById(guestId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<GuestwId>>;
    public getGuestById(guestId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<GuestwId>>;
    public getGuestById(guestId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (guestId === null || guestId === undefined) {
            throw new Error('Required parameter guestId was null or undefined when calling getGuestById.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<GuestwId>(`${this.basePath}/guest/${encodeURIComponent(String(guestId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * List all guests
     *
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public listGuests(observe?: 'body', reportProgress?: boolean): Observable<Array<GuestwId>>;
    public listGuests(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<GuestwId>>>;
    public listGuests(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<GuestwId>>>;
    public listGuests(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<Array<GuestwId>>(`${this.basePath}/guest`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Updates a guest with form data
     *
     * @param guestId guest id to update
     * @param guest Updated guest
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateGuestWithForm(guestId: number, guest: Guest, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public updateGuestWithForm(guestId: number, guest: Guest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public updateGuestWithForm(guestId: number, guest: Guest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public updateGuestWithForm(guestId: number, guest: Guest, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (guestId === null || guestId === undefined) {
            throw new Error('Required parameter guestId was null or undefined when calling updateGuestWithForm.');
        }

        if (guest === null || guest === undefined) {
            throw new Error('Required parameter guest was null or undefined when calling updateGuestWithForm.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.put<any>(`${this.basePath}/guest/${encodeURIComponent(String(guestId))}`,
            guest,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
