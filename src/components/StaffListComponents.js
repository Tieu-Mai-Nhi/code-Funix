import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";



class StaffList extends Component {
    
    render() {
        const staffs = this.props.staffs.map((staff) => {
            // dùng prop tên là staffs được truyên từ App để lọc ra view
            return (
                <div key={staff.id} className="col-12 col-md-6 col-lg-4 mt-2">
                    <Card>
                        <CardTitle>{staff.name}</CardTitle>
                    </Card>
                </div>
            )
        })
        
        return(
            <div className = "container" >
                <div className="row">
                    {staffs}
                </div>
            </div>
        );
    }
}       

export default StaffList;