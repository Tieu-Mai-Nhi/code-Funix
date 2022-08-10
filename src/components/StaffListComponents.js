import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, Button } from "reactstrap";
import dateFormat from "dateformat"; 

class StaffList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedStaff: null,
            defaultColumn: "col-12 col-md-6 col-lg-4 mt-2"
        };
    }

    onStaffSelect(staff) {
        this.setState({ selectedStaff: staff });
    }

    onColumnSelect(column) {
        this.setState({ defaultColumn: column });
    }

    renderInfor(infor) {
        if (infor != null) {
            return (
                <div className="container mt-2">
                    <Card>
                        <div className="row">
                        <CardImg className="col-12 col-md-6" src={infor.image} alt={infor.name} />
                        <CardBody className="col-12 col-md-6">
                            <CardTitle className="ml-3 mt-2">Họ và tên: {infor.name}</CardTitle>
                            <CardText className="ml-3">Ngày sinh: {dateFormat(infor.doB, "dd/mm/yyyy")}</CardText>
                            <CardText className="ml-3">Ngày vào công ty: {dateFormat(infor.startDate, "dd/mm/yyyy")}</CardText>
                            <CardText className="ml-3">Phòng ban: {infor.department.name}</CardText>
                            <CardText className="ml-3">Số ngày nghỉ còn lại: {infor.annualLeave}</CardText>
                            <CardText className="ml-3">Số ngày đã làm thêm: {infor.overTime}</CardText>
                        </CardBody>
                        </div>
                    </Card>
                </div>
            )
        } else {
            return <div></div>
        }
    }

    render() {
        const staffs = this.props.staffs.map((staff) => {
            // dùng prop tên là staffs được truyên từ App để lọc ra view
            return (
                <div key={staff.id} className={this.state.defaultColumn} style={{"text-align": "center"}}>
                    <Card onClick={() => this.onStaffSelect(staff)}>
                        <CardTitle style={{ "line-height": "38px", "margin-bottom": "0" }}>{staff.name}</CardTitle>
                    </Card>
                </div>
            )
        })
        
        return(
            <div className="container">
                
                <div className="row">
                    <div className="col-12 mt-3 mb-1" style={{"margin": "auto"}}>
                    <Button onClick={() => this.onColumnSelect("col-12 col-md-6 col-lg-12 mt-2")} className="mr-1 mb-1" color="success">1 cột</Button>
                    <Button onClick={() => this.onColumnSelect("col-12 col-md-6 col-lg-6 mt-2")} className="mr-1 mb-1" color="success">2 cột</Button>
                    <Button onClick={() => this.onColumnSelect("col-12 col-md-6 col-lg-4 mt-2")} className="mr-1 mb-1" color="success">3 cột</Button>
                    <Button onClick={() => this.onColumnSelect("col-12 col-md-6 col-lg-3 mt-2")} className="mr-1 mb-1" color="success">4 cột</Button>
                    <Button onClick={() => this.onColumnSelect("col-12 col-md-6 col-lg-2 mt-2")} className="mr-1 mb-1" color="success">6 cột</Button>
                    </div>
                </div>
                
                <div className="row">
                    {staffs}
                </div>
                
                <p className="mt-2" style={{ "color": "blue", "text-align": "center" }}>Bấm vào tên nhân viên để xem thông tin</p>
                
                <div className="row">
                    {this.renderInfor(this.state.selectedStaff)}
                </div>
            </div>
        );
    }
}       

export default StaffList;