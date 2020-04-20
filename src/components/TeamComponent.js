import React from "react";
import {
  Card, CardImg, CardText, CardBody,
   Button
} from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import emmanuel from '../images/emmanuelre.jpg';
import louis from '../images/louis.jpg';
import sean from '../images/sean.jpg';


const TeamPage = () => {
  return (
    <Card className="my-5 px-1 pb-5 text-center">
      <CardBody>
        <h2 className="h1-responsive font-weight-bold my-5">
          Our amazing team
        </h2>
        <p className="grey-text w-responsive mx-auto mb-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error
          amet numquam iure provident voluptate esse quasi, veritatis totam
          voluptas nostrum quisquam eum porro a pariatur veniam.
        </p>
        <Row>
        <Col md="4" className="mb-md-0 mb-5">
            <CardImg
              tag="img"
              src={emmanuel}
              className="rounded z-depth-1-half img-fluid"
              alt="Sample avatar"
            />
            <h4 className="font-weight-bold dark-grey-text my-4">John Doe</h4>
            <h6 className="text-uppercase grey-text mb-3">
            Full-Stack Developer
            </h6>
            <Button tag="a" floating size="sm" className="mx-1 mb-0 btn-email">
            <i class="fas fa-envelope"/>
            </Button>
            <Button tag="a" floating size="sm" className="mx-1 mb-0 btn-fb">
            <i class="fab fa-facebook"/>
            </Button>
            <Button tag="a" floating size="sm" className="mx-1 mb-0 btn-git">
              <i class=" fab fa-github" />
            </Button>
          </Col>

          <Col md="4" className="mb-md-0 mb-5">
            <img
              tag="img"
              src={louis}
              className="rounded z-depth-1-half img-fluid"
              alt="Sample avatar"
            />
            <h4 className="font-weight-bold dark-grey-text my-4">John Doe</h4>
            <h6 className="text-uppercase grey-text mb-3">
            Full-Stack Developer
            </h6>
            <Button tag="a" floating size="sm" className="mx-1 mb-0 btn-email">
            <i class="fas fa-envelope"/>
            </Button>
            <Button tag="a" floating size="sm" className="mx-1 mb-0 btn-fb">
            <i class="fab fa-facebook"/>
            </Button>
            <Button tag="a" floating size="sm" className="mx-1 mb-0 btn-git">
              <i class=" fab fa-github" />
            </Button>
          </Col>

          <Col md="4" className="mb-md-0 mb-5">
            <img
              tag="img"
              src={sean}
              className="rounded z-depth-1-half img-fluid"
              alt="Sample avatar"
            />
            <h4 className="font-weight-bold dark-grey-text my-4">John Doe</h4>
            <h6 className="text-uppercase grey-text mb-3">
             Full-Stack Developer
            </h6>
            <Button tag="a" floating size="sm" className="mx-1 mb-0 btn-email">
            <i class="fas fa-envelope"/>
            </Button>
            <Button tag="a" floating size="sm" className="mx-1 mb-0 btn-fb">
            <i class="fab fa-facebook"/>
            </Button>
            <Button tag="a" floating size="sm" className="mx-1 mb-0 btn-git">
              <i class=" fab fa-github" />
            </Button>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

export default TeamPage;
