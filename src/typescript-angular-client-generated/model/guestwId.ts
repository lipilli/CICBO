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
import { Room } from './room';


/**
 * Guest-object in response
 */
export interface GuestwId { 
    id: number;
    firstName: string;
    name: string;
    mail?: string;
    phone?: string;
    address?: string;
    arrivedAt: string;
    leftAt: string;
    room: Room;
}
