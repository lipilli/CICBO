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

import { SearchObject } from '../model/searchObject';
import { Staff } from '../model/staff';
import { StaffShift } from '../model/staffShift';
import { StaffwId } from '../model/staffwId';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class StaffService {

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
     * Add a new shift to staff member
     *
     * @param staffId ID of staff member
     * @param staff New shift object
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public addShift(staffId: number, staff: StaffShift, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public addShift(staffId: number, staff: StaffShift, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public addShift(staffId: number, staff: StaffShift, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public addShift(staffId: number, staff: StaffShift, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (staffId === null || staffId === undefined) {
            throw new Error('Required parameter staffId was null or undefined when calling addShift.');
        }

        if (staff === null || staff === undefined) {
            throw new Error('Required parameter staff was null or undefined when calling addShift.');
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
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<any>(`${this.basePath}/staff/${encodeURIComponent(String(staffId))}/shift`,
            staff,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Add a new staff member
     *
     * @param staff Staff object that needs to be added to the staff list
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public addStaff(staff: Staff, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public addStaff(staff: Staff, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public addStaff(staff: Staff, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public addStaff(staff: Staff, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (staff === null || staff === undefined) {
            throw new Error('Required parameter staff was null or undefined when calling addStaff.');
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

        return this.httpClient.post<any>(`${this.basePath}/staff`,
            staff,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Deletes a staff member
     *
     * @param staffId staff id to delete
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteStaffMember(staffId: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public deleteStaffMember(staffId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public deleteStaffMember(staffId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public deleteStaffMember(staffId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (staffId === null || staffId === undefined) {
            throw new Error('Required parameter staffId was null or undefined when calling deleteStaffMember.');
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

        return this.httpClient.delete<any>(`${this.basePath}/staff/${encodeURIComponent(String(staffId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Finds staff members
     *
     * @param searchFilter Search filter object
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public findStaffMembers(searchFilter: SearchObject, observe?: 'body', reportProgress?: boolean): Observable<Array<StaffwId>>;
    public findStaffMembers(searchFilter: SearchObject, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<StaffwId>>>;
    public findStaffMembers(searchFilter: SearchObject, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<StaffwId>>>;
    public findStaffMembers(searchFilter: SearchObject, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (searchFilter === null || searchFilter === undefined) {
            throw new Error('Required parameter searchFilter was null or undefined when calling findStaffMembers.');
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

        return this.httpClient.get<Array<StaffwId>>(`${this.basePath}/staff/find`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Find staff member by ID
     * Returns a single staff member
     * @param staffId ID of staff member to return
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getStaffMemberById(staffId: number, observe?: 'body', reportProgress?: boolean): Observable<StaffwId>;
    public getStaffMemberById(staffId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<StaffwId>>;
    public getStaffMemberById(staffId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<StaffwId>>;
    public getStaffMemberById(staffId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (staffId === null || staffId === undefined) {
            throw new Error('Required parameter staffId was null or undefined when calling getStaffMemberById.');
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

        return this.httpClient.get<StaffwId>(`${this.basePath}/staff/${encodeURIComponent(String(staffId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * List all staff members
     *
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public listStaff(observe?: 'body', reportProgress?: boolean): Observable<Array<StaffwId>>;
    public listStaff(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<StaffwId>>>;
    public listStaff(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<StaffwId>>>;
    public listStaff(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.get<Array<StaffwId>>(`${this.basePath}/staff`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Replaces all shift items of staff member
     *
     * @param staffId ID of staff member
     * @param staff Array of shift objects / replacement
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public replaceShift(staffId: number, staff: Array<StaffShift>, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public replaceShift(staffId: number, staff: Array<StaffShift>, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public replaceShift(staffId: number, staff: Array<StaffShift>, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public replaceShift(staffId: number, staff: Array<StaffShift>, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (staffId === null || staffId === undefined) {
            throw new Error('Required parameter staffId was null or undefined when calling replaceShift.');
        }

        if (staff === null || staff === undefined) {
            throw new Error('Required parameter staff was null or undefined when calling replaceShift.');
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
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.put<any>(`${this.basePath}/staff/${encodeURIComponent(String(staffId))}/shift`,
            staff,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Updates a staff member
     *
     * @param staffId staff id to update
     * @param staff Updated staff
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateStaff(staffId: number, staff: Staff, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public updateStaff(staffId: number, staff: Staff, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public updateStaff(staffId: number, staff: Staff, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public updateStaff(staffId: number, staff: Staff, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (staffId === null || staffId === undefined) {
            throw new Error('Required parameter staffId was null or undefined when calling updateStaff.');
        }

        if (staff === null || staff === undefined) {
            throw new Error('Required parameter staff was null or undefined when calling updateStaff.');
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

        return this.httpClient.put<any>(`${this.basePath}/staff/${encodeURIComponent(String(staffId))}`,
            staff,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
