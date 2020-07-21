import React, { useState } from 'react';
import { Card, Badge, Button, Collapse } from "react-bootstrap"
import ReactMarkdown from "react-markdown"

const Job = ({ job }) => {
    const [ open, setOpen ] = useState(false)
    const { 
        title, 
        company_logo, 
        company, 
        created_at, 
        description, 
        how_to_apply, 
        location, 
        type} = job

    return (
        <Card className="my-3">
            <Card.Body>
                <div className="d-flex justify-content-between">
                    <div>
                        <Card.Title>
                            {title} - <span className="text-muted font-weight-light">{company}</span> 
                        </Card.Title>
                        <Card.Subtitle>
                            <span className="text-muted font-weight-light my-2">Posted on:</span> {new Date(created_at).toLocaleDateString()}
                        </Card.Subtitle>
                        <div className="my-2">
                            <Badge variant="primary">{type}</Badge> <Badge variant="secondary">{location}</Badge>
                        </div>
                        <div style={{ wordBreak: "break-all" }}>
                            <ReactMarkdown>
                                {how_to_apply}
                            </ReactMarkdown>
                        </div>
                    </div>
                    <img className="d-none d-md-block" height="50" src={company_logo} alt={company} />
                </div>
                <Card.Text>
                    <Button 
                        onClick={() => setOpen(prevOpen => !prevOpen)} 
                        variant="primary">
                            {open ? "Hide Details" : "View Details"}
                    </Button>
                </Card.Text>
                <Collapse in={open}>
                    <div className="mt-4">
                        <ReactMarkdown>
                            {description}
                        </ReactMarkdown>
                    </div>
                </Collapse>
            </Card.Body>
        </Card>
    );
}

export default Job;
