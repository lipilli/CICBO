import {Component, Input, OnInit} from '@angular/core';
import {
  AlarmQueryObject,
  AlarmService,
  StaffService,
  StaffwId,
  SearchObject, StaffShift, GuestwId
} from "../../../typescript-angular-client-generated";
import {stringify} from "querystring";
import {newArray} from "@angular/compiler/src/util";
import {ContactListComponent} from "../contact-list/contact-list.component";
import {ContactListService} from "../../services/contact-list/contact-list.service";
import {Router} from "@angular/router";
@Component({
  selector: 'app-find-staff',
  templateUrl: './find-staff.component.html',
  styleUrls: ['./find-staff.component.less']
})
export class FindStaffComponent implements OnInit{

  @Input() firstName:string;
  @Input() lastName:string;
  @Input() fromDate: string;
  @Input() toDate: string;

  public staff: StaffwId[];
  public staffMap: Map<number, StaffwId> = new Map<number, StaffwId>();

  public selectedStaffMember: StaffwId;
  public selectedStaffMemberShifts: Map<number, StaffShift> = new Map<number, StaffShift>();
  public selectedStaffMemberShiftsIds:  Array<number> =[];
  public selectedStaffMemberShiftsChecked: Map<number, boolean> = new Map<number, boolean>();
  private selectAllShifts=false;


  protected selectAll = true;
  // protected selectedStaff:Map<number, StaffwId> = new Map;
  protected toggleAfterSelectAll = false;
  public checks:boolean;

  constructor(private staffService:StaffService,
              private alarmService:AlarmService,
              private contactListService:ContactListService,
              private router:Router) {}

  /**
   * Initialize selected staff.
   */
  ngOnInit(): void {
    this.selectedStaffMember = {
      "id" : null,
      "firstName": "",
      "name": "",
      "mail": "",
      "phone": "",
      "address": "",
    }
  }



  /**
   * Set the values of the search object.
   * @private
   */
  private determineSearchObject(): SearchObject{
    let searchStaff:SearchObject;
    if(!(this.firstName || this.lastName)){
      alert("Please enter a name");
    }else{
      if(this.firstName && this.lastName){
        searchStaff = {
          "sortByName":true,
          "firstName":this.firstName,
          "name": this.lastName
        }
      }else{
        if(this.firstName){
          searchStaff = {
            "sortByName":true,
            "firstName":this.firstName,
          }
        }else{
          searchStaff = {
            "sortByName":true,
            "name":this.lastName,
          }
        }
      }
    }
    return searchStaff;
  }

  /**
   * Sends a request to the server that returns the the staff found then saves the response.
   */
  onSubmit(): void{
    try{
      this.staffService.findStaffMembers(this.determineSearchObject()).subscribe(res =>{
       if(res.length === 0){
         alert("No staff member found.")
       }else{
         this.staff = res;
         this.selectedStaffMember = res[0];
         this.staff.forEach(staff =>{
           this.staffMap.set(staff.id, staff);
         });
        }
      });
    }catch(e){
      alert(e.message);
    }
  }

  /**
   * Selects a staff and sets the
   * @param id Id of staff to select.
   */
  async selectStaff(id: number): Promise<void> {
    this.selectedStaffMember = this.staffMap.get(id);
    this.updateShifts();


   //  this.selectedStaffMemberShifts.clear()
   //
   //  for(let i=0;i<this.selectedStaffMember.shifts.length; i++){
   //    const shift = this.selectedStaffMember.shifts[i];
   //    this.selectedStaffMemberShifts.set(i,shift);
   //  }
   //
   // this.showShifts(id);
  }

  updateShifts(): void{
    this.selectedStaffMemberShifts.clear();
    for(let i=0;i<this.selectedStaffMember.shifts.length; i++){
      const shift = this.selectedStaffMember.shifts[i];
      this.selectedStaffMemberShifts.set(i,shift);
    }
  }


  /**
   * Selects or deselects all shifts.
   */
  selectAllShiftsToggle(): void{
    if (this.selectAllShifts){
      this.selectAllShifts = false;
      this.checks = true;
      Object.keys(this.selectedStaffMemberShifts).forEach(key=>{
        this.selectedStaffMemberShifts[key]=true;
      })
    }else { //Deselect all
      this.selectAllShifts = true;
      this.checks = false;
      Object.keys(this.selectedStaffMemberShifts).forEach( (key)=> {
        this.selectedStaffMemberShifts[key] = false;
      });
    }
  }


  //
  // /** TODO delete
  //  * Keeps track of the selection property of each guest
  //  * @param id guest ID.
  //  */
  // toggleSelectedStaff(id:number): void{
  //   this.selectedStaff[id] = !this.selectedStaff[id];
  //   if(!this.selectedStaff[id]){
  //     this.selectAll = true; // Ensure toggle deselect all
  //   }
  // }

  /**
   * Changes the background color of the row of the selected staff.
   * @param staffMemberId Id of staff member to select.
   */
  checkSelection(staffMemberId:number): string{
    if(staffMemberId === this.selectedStaffMember.id){
      return "marked-table-cell"
    }else{return "table-cell"}
  }


  /**
   * Toggles all shifts as selected or not
   * @param id
   */
  toggleSelectedShifts(id: number): void {
    const value = this.selectedStaffMemberShiftsChecked.get(id);
    this.selectedStaffMemberShiftsChecked.set(id,!value);
  }


  //
  // /** TODO delete
  //  * Keeps track of the selection property of each guest
  //  * @param id guest ID.
  //  */
  // selectAllToggle(): void{
  //   //Select all
  //   if (this.selectAll){
  //     this.selectAll = false;
  //     this.checks = true;
  //     Object.keys(this.selectedStaff).forEach( (key)=> {
  //       this.selectedStaff[key] = true;
  //     });
  //
  //   } else {if(!this.selectAll && !this.toggleAfterSelectAll){ //Deselect all
  //     this.selectAll = true;
  //     this.checks = false;
  //     Object.keys(this.selectedStaff).forEach( (key)=> {
  //       this.selectedStaff[key] = false;
  //     });
  //   }
  //   }
  // }
  //



  createQueryObjects(): AlarmQueryObject[]{
    const queries:AlarmQueryObject[] = [];


    const shiftsForQuery: StaffShift[] =[];
    for(const [key,value] of this.selectedStaffMemberShiftsChecked){
      if(value){shiftsForQuery.push(this.selectedStaffMemberShifts.get(key))}
    }

    shiftsForQuery.forEach(shift=>{
      const query:AlarmQueryObject={
        "type": "staff",
        "sortByName": true,
        "firstName": this.staffMap.get(this.selectedStaffMember.id).firstName,
        "name": this.staffMap.get(this.selectedStaffMember.id).name,
        "arrivedAt": shift.arrivedAt,
        "leftAt": shift.leftAt
      }
      queries.push(query);
    });

    return queries

  }

  /**
   * Returns a list of contacts of the infected person.
   */
  async getContactList(): Promise<void>{
    await this.getContacts();
    //await this.router.navigateByUrl('alarm/find-staff/contacts');
  }


  async getContacts():Promise<void>{
    const queryList:AlarmQueryObject[] = await this.createQueryObjects();
    let guestContacts:GuestwId[] = [];
    let staffContacts:StaffwId[] = [];

    await queryList.forEach(query=>{
      this.alarmService.createContactList(query).subscribe(res =>{
        guestContacts = guestContacts.concat(res.guests);
        staffContacts = staffContacts.concat(res.staffMembers);
        console.log("contqact from q");
        console.log(guestContacts);
        console.log(staffContacts);
      });
    });

    console.log("Contacts");
    console.log(guestContacts);
    console.log(staffContacts)

    const guestSet = await this.uniqueGuests(guestContacts);
    const staffSet = await this.uniqueStaff(staffContacts);
    console.log("sets");
    console.log(guestSet)
    console.log(staffSet)

    await this.contactListService.addContacts( Array.from(guestSet), Array.from(staffSet));
    console.log("guests n staff in service")
    await this.contactListService.currentStaff.subscribe(s=>console.log(s));
    await this.contactListService.currentGuests.subscribe(s=>console.log(s));
  }

  uniqueStaff(staff:StaffwId[]): StaffwId[]{
    const uniqueStaffMap: Map<number,StaffwId> = new Map<number,StaffwId>();
    staff.forEach(staff=>{
      uniqueStaffMap.set(staff.id, staff);
    })
    return Array.from(uniqueStaffMap.values());
  }

  uniqueGuests(guests:GuestwId[]): GuestwId[]{
    const uniqueGuestMap: Map<string, GuestwId> = new Map<string, GuestwId>();
    guests.forEach(guest=>{
      uniqueGuestMap.set(guest.mail, guest);
    })
    return Array.from(uniqueGuestMap.values());
  }
}
