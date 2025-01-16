import React, { useState } from "react";
import { Checkbox, Form, Input, Table } from "antd";
import { Button, Col, Container, ProgressBar, Row } from "react-bootstrap";
import { useDataContext } from "../../contexts/data-context";
import { DeleteEvaluationModal } from "../../components/evaluation-page-modals";

const AgendaAlignment3 = ({handleReturn, handleNext, evaluationId, isEditMode, setIsEditMode}) => {
  const { formData, updateFormData } = useDataContext();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  console.log(formData);

  const [dataSource, setDataSource] = useState([
    {
      key: "1",
      text2:
        "1. Is the Research Paper Conference / Journal classified as not Predatory and is included in the list of accepted conferences and journals? (See Appendices for the list of accepted conferences and journals)",
      checkbox1: formData.is_ethics_criteria1 === true,
      checkbox2: formData.is_ethics_criteria1 === false,
      textarea: formData.is_ethics_criteria1_remarks || "",
    },
    {
      key: "2a",
      text2:
        "2.a Did the Research Paper require obtaining ethics clearance because of possible risk of injury to people, animals, or nature? (if applicable)",
      checkbox1: formData.is_ethics_criteria2a === true,
      checkbox2: formData.is_ethics_criteria2a === false,
      textarea: formData.is_ethics_criteria2a_remarks || "",
    },
    {
      key: "2b",
      text2:
        "2.b If yes, did the research paper obtain ethics clearance? (if applicable)",
      checkbox1: formData.is_ethics_criteria2b === true,
      checkbox2: formData.is_ethics_criteria2b === false,
      textarea: formData.is_ethics_criteria2b_remarks || "",
    },
    {
      key: "3a",
      text2:
        "3.a Did the Research Paper involve extensive data (personal, and technical) covered by data privacy or non-disclosure agreement? (if applicable)",
      checkbox1: formData.is_ethics_criteria3a === true,
      checkbox2: formData.is_ethics_criteria3a === false,
      textarea: formData.is_ethics_criteria3a_remarks || "",
    },
    {
      key: "3b",
      text2:
        "3.b. If yes, DId the Research Paper obtain consent/approval for disclosure? (if applicable)",
      checkbox1: formData.is_ethics_criteria3b === true,
      checkbox2: formData.is_ethics_criteria3b === false,
      textarea: formData.is_ethics_criteria3b_remarks || "",
    },
    {
      key: "4",
      text2:
        "4. Does the research paper meet the criteria for the allowable Originality check percentage result using Turnitin, Unicheck, or any similarity tool <15%?",
      checkbox1: formData.is_ethics_criteria4 === true,
      checkbox2: formData.is_ethics_criteria4 === false,
      textarea: formData.is_ethics_criteria4_remarks || "",
    },
    {
      key: "5",
      text2:
        "5. Does the research paper have an overall score of at least 90% in grammarly?",
        checkbox1: formData.is_ethics_criteria5 === true,
        checkbox2: formData.is_ethics_criteria5 === false,
        textarea: formData.is_ethics_criteria5_remarks || "",
    },
  ]);
  const [form] = Form.useForm();

  const columns = [
    {
      title: "Criteria",
      dataIndex: "text2",
      key: "text2",
      width: "50%",
      aligh: "center",
      render: (text) => (
        <div>
          {text.split("\n").map((line, index) => (
            <p key={index} style={{ margin: 0 }}>
              {line}
            </p>
          ))}
        </div>
      ),
    },
    {
      title: "Yes",
      dataIndex: "checkbox1",
      key: "checkbox1",
      render: (checked, record, index) => (
        <Checkbox
          checked={checked}
          onChange={(e) => handleCheckboxChange(e, index, "checkbox1")}
          disabled={!isEditMode}
        />
      ),
    },
    {
      title: "No",
      dataIndex: "checkbox2",
      key: "checkbox2",
      render: (checked, record, index) => (
        <Checkbox
          checked={checked}
          onChange={(e) => handleCheckboxChange(e, index, "checkbox2")}
          disabled={!isEditMode}
        />
      ),
    },
    {
      title: "Remarks",
      title: "Remarks",
      dataIndex: "textarea",
      key: "textarea",
      render: (text, record, index) => (
        <Input.TextArea
          rows={4}
          value={text}
          onChange={(e) => handleTextareaChange(e, index)}
          disabled={!isEditMode}
        />
      ),
    },
  ];

  const handleCheckboxChange = (e, index, key) => {
    const newData = [...dataSource];
    newData[index][key] = e.target.checked;

    if (newData[index].key === "1") {
      if (key === "checkbox1" && e.target.checked) {
        updateFormData({ ...formData, is_ethics_criteria1: true });
        newData[index].checkbox2 = false;
      } else if (key === "checkbox2" && e.target.checked) {
        updateFormData({ ...formData, is_ethics_criteria1: false });
        newData[index].checkbox1 = false;
      } else {
        updateFormData({ ...formData, is_ethics_criteria1: false });
      }
    }

    else if (newData[index].key === "2a") {
      if (key === "checkbox1" && e.target.checked) {
        updateFormData({ ...formData, is_ethics_criteria2a: true });
        newData[index].checkbox2 = false;
      } else if (key === "checkbox2" && e.target.checked) {
        updateFormData({ ...formData, is_ethics_criteria2a: false });
        newData[index].checkbox1 = false;
      } else {
        updateFormData({ ...formData, is_ethics_criteria2a: false });
      }
    }

    else if (newData[index].key === "2b") {
      if (key === "checkbox1" && e.target.checked) {
        updateFormData({ ...formData, is_ethics_criteria2b: true });
        newData[index].checkbox2 = false;
      } else if (key === "checkbox2" && e.target.checked) {
        updateFormData({ ...formData, is_ethics_criteria2b: false });
        newData[index].checkbox1 = false;
      } else {
        updateFormData({ ...formData, is_ethics_criteria2b: false });
      }
    }

    else if (newData[index].key === "3a") {
      if (key === "checkbox1" && e.target.checked) {
        updateFormData({ ...formData, is_ethics_criteria3a: true });
        newData[index].checkbox2 = false;
      } else if (key === "checkbox2" && e.target.checked) {
        updateFormData({ ...formData, is_ethics_criteria3a: false });
        newData[index].checkbox1 = false;
      } else {
        updateFormData({ ...formData, is_ethics_criteria3a: false });
      }
    }
    
    else if (newData[index].key === "3b") {
      if (key === "checkbox1" && e.target.checked) {
        updateFormData({ ...formData, is_ethics_criteria3b: true });
        newData[index].checkbox2 = false;
      } else if (key === "checkbox2" && e.target.checked) {
        updateFormData({ ...formData, is_ethics_criteria3b: false });
        newData[index].checkbox1 = false;
      } else {
        updateFormData({ ...formData, is_ethics_criteria3b: false });
      }
    }

    else if (newData[index].key === "4") {
      if (key === "checkbox1" && e.target.checked) {
        updateFormData({ ...formData, is_ethics_criteria4: true });
        newData[index].checkbox2 = false;
      } else if (key === "checkbox2" && e.target.checked) {
        updateFormData({ ...formData, is_ethics_criteria4: false });
        newData[index].checkbox1 = false;
      } else {
        updateFormData({ ...formData, is_ethics_criteria4: false });
      }
    }

    else if (newData[index].key === "5") {
      if (key === "checkbox1" && e.target.checked) {
        updateFormData({ ...formData, is_ethics_criteria5: true });
        newData[index].checkbox2 = false;
      } else if (key === "checkbox2" && e.target.checked) {
        updateFormData({ ...formData, is_ethics_criteria5: false });
        newData[index].checkbox1 = false;
      } else {
        updateFormData({ ...formData, is_ethics_criteria5: false });
      }
    }

    setDataSource(newData);
  };

  const handleTextareaChange = (e, index) => {
    const newData = [...dataSource];
    newData[index].textarea = e.target.value;

    if (newData[index].key === "1") {
      updateFormData({ ...formData, is_ethics_criteria1_remarks: e.target.value });
    }

    else if (newData[index].key === "2a") {
      updateFormData({ ...formData, is_ethics_criteria2a_remarks: e.target.value });
    }

    else if (newData[index].key === "2b") {
      updateFormData({ ...formData, is_ethics_criteria2b_remarks: e.target.value });
    }

    else if (newData[index].key === "3a") {
      updateFormData({ ...formData, is_ethics_criteria3a_remarks: e.target.value });
    }

    else if (newData[index].key === "3b") {
      updateFormData({ ...formData, is_ethics_criteria3b_remarks: e.target.value });
    }

    else if (newData[index].key === "4") {
      updateFormData({ ...formData, is_ethics_criteria4_remarks: e.target.value });
    }

    else if (newData[index].key === "5") {
      updateFormData({ ...formData, is_ethics_criteria5_remarks: e.target.value });
    }

    setDataSource(newData);
  };

  const handleDelete = async () => {
    setShowDeleteModal(true);
  };

  const handleEditClick = () => setIsEditMode(true);

  const handleCancelEdit = () => setIsEditMode(false);

  return (
    <Container fluid>
      <Row
        className="d-flex align-items-center"
        style={{ paddingLeft: "1rem", gap: "20px", paddingRight: "1rem" }}
      >
        <Col>
          <h2 className="titleFont m-0 p-0">Research Evaluation Checklist</h2>
        </Col>
        <Col className="d-flex justify-content-end">
          {!isEditMode ? (
            <Button variant="warning" onClick={handleEditClick} style={{marginLeft: "0.5rem"}}>
              Edit
            </Button>
          ):(
            <Button variant="outline-warning" onClick={handleCancelEdit} style={{marginLeft: "0.5rem"}}>
              Cancel Edit
            </Button>
          )}
          <Button variant="warning" onClick={handleDelete} style={{marginLeft: "0.5rem"}}>Delete</Button>
        </Col>
      </Row>

      <h3 style={{fontSize: "0.8rem", paddingLeft: "3rem", paddingRight: "3rem"}}>Step 4 of 5</h3>
      <ProgressBar variant="warning" now={80} className="mb-3" />
        <Form>
          <Row>
            <Col style={{ marginLeft: "40px", marginTop: "0px" }}>
              <h2 className="titleFont p-2">
                III. Initial Research Ethics Review and Evaluation
              </h2>
              <h3
                className="titleFont mb-0"
                style={{ fontSize: "17px", marginLeft: "10px" }}
              >
                Note: The Research Paper should satisfy ALL the applicable
                criteria.
              </h3>
            </Col>
          </Row>
        </Form>

        <div style={{ marginLeft: "20px", marginRight: "20px" }}>
          <Form form={form}>
            <Table
              dataSource={dataSource}
              columns={columns}
              pagination={false}
            />
          </Form>
        </div>

        <Form>
          <Row
            className="mb-1"
            style={{ paddingLeft: "3rem", paddingRight: "3rem" }}
          ></Row>
        </Form>

        <Row style={{ paddingLeft: "20rem", paddingRight: "20rem", paddingTop:"2rem", paddingBottom:"2rem"}}>
            <>
              <Button
                variant="outline-warning"
                as={Col}
                onClick={handleReturn}
              >
                Return
              </Button>{" "}
              <Col md="auto"></Col>
              <Button variant="warning" as={Col} onClick={handleNext}>
                Continue
              </Button>{" "}
            </>
        </Row>
        <DeleteEvaluationModal
          show={showDeleteModal}
          evaluationId={evaluationId}
          onClose={() => setShowDeleteModal(false)}
          trigger={handleReturn}
          setShow={setShowDeleteModal}
        />
    </Container>
  );
};

export default AgendaAlignment3;
