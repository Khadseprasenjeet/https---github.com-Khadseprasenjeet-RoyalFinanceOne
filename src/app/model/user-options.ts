export class UserOptions {

    public static userOptions:Array<any>=[
        //0th index we have on object that have properties like re,oe,cm,ah
          {
            re: [
                  {label:'Add Enquiry' , path:'addenq'},
                  {label:'View Enquiry' , path :'viewenq'},
                  {label:'Apply For Loan', path:'applyloan'},
                  {label:'EMI Calculator' , path:'emi_calc'}
                ],
            oe:[
              {label:'View All' , path:'view_all'},
              {label:'Check cibil' , path:'check_cibil'},
              {label:'View All Loan' , path :'view Apply loan'},
              {label:'Verify Document' , path:'view_document'}
         
              ],
              cm:[
                {label:'Bank Details' ,path:'bank_details'},
                {label:'Custermer Personal Details' , path:'custmer_personal_details'},
                {label:'Prevoius Loan Details', path:'previous_loan_details'}
              ],
              ah:[
                {label:'Desburse' , path:'disbursement'}
              ],
              admin:[
                {label:'AddEmployee' , path:'addEmployee'},
                {label:'ViewEmployee' , path:'viewEmployee'}
              ],
                  
        }
      ]

}
