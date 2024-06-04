import { Button, Form, Input, Radio, Select, Space, Steps } from "antd";
import UploadComponent from "../../../components/UploadComponent";
import DashboardLayout from "../../../components/DashboardLayout";
import { useSelector } from "react-redux";
import { useState } from "react";
import { FiMinus } from "react-icons/fi";
import { MdPlusOne } from "react-icons/md";
import { BiMinus, BiMinusCircle, BiPlus } from "react-icons/bi";

const AddPlant = () => {
  const { categories } = useSelector((state) => state.category);
  const [sideEffects, setSideEffects] = useState([]);
  const [dosages, setDosages] = useState([]);
  const [usages, setUsages] = useState([]);
  const [partToUse, setPartToUse] = useState([]);
  const [howToUse, setHowToUse] = useState([]);
  const [cautions, setCautions] = useState([]);
  const [precautions, setPrecautions] = useState([]);
  const [dosageType, setDosageType] = useState("all");
  const [current, setCurrent] = useState(0);

  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const handleChange = (value) => {
    console.log(value);
  };
  const { TextArea } = Input;
  const options = [];
  for (let i = 10; i < 36; i++) {
    options.push({
      value: i.toString(36) + i,
      label: i.toString(36) + i,
    });
  }

  const addSideEffect = () => {
    setSideEffects([...sideEffects, ""]);
  };

  const removeSideEffect = (index) => {
    const newSideEffects = sideEffects.filter((_, i) => i !== index);
    setSideEffects(newSideEffects);
  };

  const handleInputChange = (index, event) => {
    const newSideEffects = sideEffects.map((effect, i) =>
      i === index ? event.target.value : effect
    );
    setSideEffects(newSideEffects);
  };

  const addDosage = () => {
    setDosages([...dosages, ""]);
  };

  const removeDosage = (index) => {
    const newDosages = dosages.filter((_, i) => i !== index);
    setDosages(newDosages);
  };

  const handleDosagesChange = (index, event) => {
    const newDosages = dosages.map((effect, i) =>
      i === index ? event.target.value : effect
    );
    setDosages(newDosages);
  };
  const addUse = () => {
    setUsages([...usages, ""]);
  };

  const removeUsage = (index) => {
    const newUsages = usages.filter((_, i) => i !== index);
    setUsages(newUsages);
  };

  const handleUsagesChange = (index, event) => {
    const newUsages = usages.map((effect, i) =>
      i === index ? event.target.value : effect
    );
    setUsages(newUsages);
  };

  // part use
  const addPart = () => {
    setPartToUse([...partToUse, ""]);
  };

  const removePart = (index) => {
    const newPartToUse = partToUse.filter((_, i) => i !== index);
    setPartToUse(newPartToUse);
  };

  const handlePartChange = (index, event) => {
    const newPartToUse = partToUse.map((effect, i) =>
      i === index ? event.target.value : effect
    );
    setPartToUse(newPartToUse);
  };
  // How to use

  const addHowToUse = () => {
    setHowToUse([...howToUse, ""]);
  };

  const removeHowToUse = (index) => {
    const newSideEffects = howToUse.filter((_, i) => i !== index);
    setHowToUse(newSideEffects);
  };

  const handleHowToUseChange = (index, event) => {
    const newSideEffects = howToUse.map((effect, i) =>
      i === index ? event.target.value : effect
    );
    setHowToUse(newSideEffects);
  };

  const addCaution = () => {
    setCautions([...cautions, ""]);
  };

  const removeCaution = (index) => {
    const newSideEffects = cautions.filter((_, i) => i !== index);
    setCautions(newSideEffects);
  };

  const handleCautionChange = (index, event) => {
    const newSideEffects = cautions.map((effect, i) =>
      i === index ? event.target.value : effect
    );
    setCautions(newSideEffects);
  };

  const addPrecaution = () => {
    setPrecautions([...precautions, ""]);
  };

  const removePrecaution = (index) => {
    const newSideEffects = precautions.filter((_, i) => i !== index);
    setPrecautions(newSideEffects);
  };

  const handlePrecautionChange = (index, event) => {
    const newSideEffects = precautions.map((effect, i) =>
      i === index ? event.target.value : effect
    );
    setPrecautions(newSideEffects);
  };
  const handleChanges = (value) => {
    console.log(`selected ${value}`);
  };

  const onChange = (value) => {
    console.log("onChange:", value);
    setCurrent(value);
  };
  const handleNext = async () => {
    if (current === 0 || current === 1) {
      try {
        await form.validateFields(); // Validate all fields in the form
        setCurrent(current + 1); // Move to the next step if validation passes
      } catch (error) {
        console.log("Validation failed:", error);
        // Do not move to the next step if validation fails
      }
    } else {
      setCurrent(current + 1); // Move to the next step if current is not 0
    }
  };
  const handleBack = () => {
    const newCurrent = current - 1;
    setCurrent(newCurrent < 0 ? 0 : newCurrent);
  };
  console.log("Caution", precautions);

  const onValuesChange = (changedValues, allValues) => {
    // if (changedValues.allDosages) {
    //   setAllDosages(allValues.allDosages || []);
    // }
    // if (changedValues.dosages && changedValues.dosages.adults) {
    //   setAdults(allValues.dosages.adults || []);
    // }
    // if (changedValues.dosages && changedValues.dosages.children) {
    //   setChildren(allValues.dosages.children || []);
    // }
    console.log("VVAVAA", changedValues);
  };

  return (
    <DashboardLayout>
      <Form
        form={form}
        name="basic"
        className="w-[90%] m-auto"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        onValuesChange={onValuesChange}
        autoComplete="off"
        layout="vertical"
      >
        <div>
          <Steps
            current={current}
            onChange={onChange}
            items={[
              {
                title: "Plant information:",
              },
              {
                title: "Plant Description:",
              },
              {
                title: "Upload Image",
              },
            ]}
          />
          {current === 0 && (
            <div className="">
              <div className="flex gap-4 flex-wrap mt-10">
                <Form.Item
                  label="Name"
                  name="title"
                  rules={[
                    {
                      required: true,
                      message: "Please input name of Plant!",
                    },
                  ]}
                >
                  <Input
                    style={{
                      width: "100%",
                      height: "45px",
                    }}
                  />
                </Form.Item>
                <Form.Item
                  label="Scientific name"
                  name="scientificName"
                  rules={[
                    {
                      required: true,
                      message: "Please enter Scientific name!",
                    },
                  ]}
                >
                  <Input
                    style={{
                      width: "100%",
                      height: "45px",
                    }}
                  />
                </Form.Item>
                <Form.Item
                  label="Common name"
                  name="commonName"
                  rules={[
                    {
                      required: true,
                      message: "Please enter Common name!",
                    },
                  ]}
                >
                  <Input
                    style={{
                      width: "100%",
                      height: "45px",
                    }}
                  />
                </Form.Item>
              </div>
              <Form.Item
                label="Plant Category"
                name="category"
                rules={[
                  {
                    required: true,
                    message: "Please select category  of Plant!",
                  },
                ]}
              >
                <Select
                  labelInValue
                  mode="single"
                  defaultValue={{
                    value: "vegetables",
                    label: "",
                  }}
                  style={{
                    width: "100%",
                    height: "45px",
                  }}
                  onChange={handleChange}
                  options={categories.map((item) => {
                    return {
                      value: item._id,
                      label: item.title,
                    };
                  })}
                />
              </Form.Item>
              <Form.Item
                label="Description"
                name="description"
                rules={[
                  {
                    required: true,
                    message: "Please input plant description!",
                  },
                ]}
              >
                <TextArea rows={3} placeholder="provide plant Descriptions" />
              </Form.Item>
              <Form.Item
                label="Price"
                name="price"
                rules={[
                  {
                    required: true,
                    message: "Please input price of Plant!",
                  },
                ]}
              >
                <Input
                  style={{
                    width: "100%",
                    height: "45px",
                  }}
                />
              </Form.Item>
            </div>
          )}

          {current === 1 && (
            <div className="mt-10">
              {usages.map((use, index) => (
                <Form.Item
                  key={index}
                  label={`Usage ${index + 1}`}
                  required
                  rules={[
                    {
                      required: true,
                      message: "Please provide plant Medecinal use",
                    },
                  ]}
                >
                  <div className="flex space-x-10">
                    <Input
                      placeholder="Provide plant Medecinal use"
                      value={use}
                      onChange={(event) => handleUsagesChange(index, event)}
                    />

                    <Button
                      type="danger"
                      onClick={() => removeUsage(index)}
                      style={{ marginLeft: 8 }}
                      className=" p-0 rounded-full"
                    >
                      <div className="bg-red-400 p-2 text-white rounded-full">
                        <FiMinus size={15} />
                      </div>
                    </Button>
                  </div>
                </Form.Item>
              ))}
              <Form.Item>
                <Button type="dashed" onClick={addUse}>
                  Add Medecinal Use
                </Button>
              </Form.Item>
              {partToUse.map((part, index) => (
                <Form.Item
                  key={index}
                  label={`Part ${index + 1}`}
                  required
                  rules={[
                    {
                      required: true,
                      message: "Please provide part to use",
                    },
                  ]}
                >
                  <div className="flex space-x-10">
                    <Input
                      placeholder="Provide part to use"
                      value={part}
                      onChange={(event) => handlePartChange(index, event)}
                    />

                    <Button
                      type="danger"
                      onClick={() => removePart(index)}
                      style={{ marginLeft: 8 }}
                      className=" p-0 rounded-full"
                    >
                      <div className="bg-red-400 p-2 text-white rounded-full">
                        <FiMinus size={15} />
                      </div>
                    </Button>
                  </div>
                </Form.Item>
              ))}
              <Form.Item>
                <Button type="dashed" onClick={addPart}>
                  Add part to use
                </Button>
              </Form.Item>
              {dosages.map((dose, index) => (
                <Form.Item
                  key={index}
                  label={`Preparation ${index + 1}`}
                  required
                  rules={[
                    {
                      required: true,
                      message: "Please provide plant Preparations",
                    },
                  ]}
                >
                  <div className="flex space-x-10">
                    <Input
                      placeholder="Provide plant preparation"
                      value={dose}
                      onChange={(event) => handleDosagesChange(index, event)}
                    />

                    <Button
                      type="danger"
                      onClick={() => removeDosage(index)}
                      style={{ marginLeft: 8 }}
                      className=" p-0 rounded-full"
                    >
                      <div className="bg-red-400 p-2 text-white rounded-full">
                        <FiMinus size={15} />
                      </div>
                    </Button>
                  </div>
                </Form.Item>
              ))}
              <Form.Item>
                <Button type="dashed" onClick={addDosage}>
                  Add Dosage and preparation
                </Button>
              </Form.Item>
              {sideEffects.map((effect, index) => (
                <Form.Item
                  key={index}
                  label={`Side effect ${index + 1}`}
                  required
                  rules={[
                    {
                      required: true,
                      message: "Please provide plant Side effects",
                    },
                  ]}
                >
                  <div className="flex space-x-10">
                    <Input
                      placeholder="Provide plant side effect"
                      value={effect}
                      onChange={(event) => handleInputChange(index, event)}
                    />

                    <Button
                      type="danger"
                      onClick={() => removeSideEffect(index)}
                      style={{ marginLeft: 8 }}
                      className=" p-0 rounded-full"
                    >
                      <div className="bg-red-400 p-2 text-white rounded-full">
                        <FiMinus size={15} />
                      </div>
                    </Button>
                  </div>
                </Form.Item>
              ))}
              <Form.Item>
                <Button type="dashed" onClick={addSideEffect}>
                  Add Side Effect
                </Button>
              </Form.Item>
              {howToUse.map((effect, index) => (
                <Form.Item
                  key={index}
                  label={`Tip ${index + 1}`}
                  required
                  rules={[
                    {
                      required: true,
                      message: "Please provide Way to use this plant",
                    },
                  ]}
                >
                  <div className="flex space-x-10">
                    <Input
                      placeholder="Provide Way to use this plant"
                      value={effect}
                      onChange={(event) => handleHowToUseChange(index, event)}
                    />

                    <Button
                      type="danger"
                      onClick={() => removeHowToUse(index)}
                      style={{ marginLeft: 8 }}
                      className=" p-0 rounded-full"
                    >
                      <div className="bg-red-400 p-2 text-white rounded-full">
                        <FiMinus size={15} />
                      </div>
                    </Button>
                  </div>
                </Form.Item>
              ))}
              <Form.Item>
                <Button type="dashed" onClick={addHowToUse}>
                  Add How to use this plant
                </Button>
              </Form.Item>
              {cautions.map((effect, index) => (
                <Form.Item
                  key={index}
                  label={`Caution ${index + 1}`}
                  required
                  rules={[
                    {
                      required: true,
                      message: "Please provide Caution",
                    },
                  ]}
                >
                  <div className="flex space-x-10">
                    <Input
                      placeholder="Provide Caution"
                      value={effect}
                      onChange={(event) => handleCautionChange(index, event)}
                    />

                    <Button
                      type="danger"
                      onClick={() => removeCaution(index)}
                      style={{ marginLeft: 8 }}
                      className=" p-0 rounded-full"
                    >
                      <div className="bg-red-400 p-2 text-white rounded-full">
                        <FiMinus size={15} />
                      </div>
                    </Button>
                  </div>
                </Form.Item>
              ))}
              <Form.Item>
                <Button type="dashed" onClick={addCaution}>
                  Add Cautions
                </Button>
              </Form.Item>
              {precautions.map((effect, index) => (
                <Form.Item
                  key={index}
                  label={`precaution ${index + 1}`}
                  required
                  rules={[
                    {
                      required: true,
                      message: "Please provide precaution",
                    },
                  ]}
                >
                  <div className="flex space-x-10">
                    <Input
                      placeholder="Provide precaution"
                      value={effect}
                      onChange={(event) => handlePrecautionChange(index, event)}
                    />

                    <Button
                      type="danger"
                      onClick={() => removePrecaution(index)}
                      style={{ marginLeft: 8 }}
                      className=" p-0 rounded-full"
                    >
                      <div className="bg-red-400 p-2 text-white rounded-full">
                        <FiMinus size={15} />
                      </div>
                    </Button>
                  </div>
                </Form.Item>
              ))}

              <Form.Item>
                <Button type="dashed" onClick={addPrecaution}>
                  Add Precautions
                </Button>
              </Form.Item>
              {/* dosage and measurements */}
              <div>
                <h2 className="mt-10 text-xl font-medium">
                  Dosage and Measurements
                </h2>
                <Form.Item name="dosageType" label="Dosage Type">
                  <Radio.Group
                    onChange={(e) => setDosageType(e.target.value)}
                    value={dosageType}
                  >
                    <Radio value="all">All</Radio>
                    <Radio value="separate">
                      Separate for Adults and Children
                    </Radio>
                  </Radio.Group>
                </Form.Item>

                {dosageType === "all" && (
                  <Form.List name="allDosages">
                    {(fields, { add, remove }) => (
                      <>
                        {fields.map(({ key, name, fieldKey, ...restField }) => (
                          <Space
                            key={key}
                            style={{
                              display: "flex",

                              marginBottom: 8,
                            }}
                            align="baseline"
                            className=""
                          >
                            <Form.Item
                              {...restField}
                              name={[name, "dosage"]}
                              fieldKey={[fieldKey, "dosage"]}
                              rules={[
                                {
                                  required: true,
                                  message: "Please provide dosage",
                                },
                              ]}
                            >
                              <Input placeholder="Dosage for all" />
                            </Form.Item>
                            <div
                              className="bg-red-400 p-2 text-white font-semibold rounded-full"
                              onClick={() => remove(name)}
                            >
                              <FiMinus size={15} />
                            </div>
                          </Space>
                        ))}
                        <Form.Item>
                          <Button
                            type="dashed"
                            onClick={() => add()}
                            block
                            icon={<BiPlus />}
                          >
                            Add Dosage
                          </Button>
                        </Form.Item>
                      </>
                    )}
                  </Form.List>
                )}

                {dosageType === "separate" && (
                  <>
                    <h3 className="text-xl">Adults</h3>
                    <Form.List name={["dosages", "adults"]}>
                      {(fields, { add, remove }) => (
                        <>
                          {fields.map(
                            ({ key, name, fieldKey, ...restField }) => (
                              <Space
                                key={key}
                                style={{ display: "flex", marginBottom: 8 }}
                                align="baseline"
                              >
                                <Form.Item
                                  {...restField}
                                  name={[name, "dosage"]}
                                  fieldKey={[fieldKey, "dosage"]}
                                  rules={[
                                    {
                                      required: true,
                                      message:
                                        "Please provide dosage for adults",
                                    },
                                  ]}
                                >
                                  <Input placeholder="Dosage for adults" />
                                </Form.Item>
                                <div
                                  className="bg-red-400 p-2 text-white font-semibold rounded-full"
                                  onClick={() => remove(name)}
                                >
                                  <FiMinus size={15} />
                                </div>
                              </Space>
                            )
                          )}
                          <Form.Item>
                            <Button
                              type="dashed"
                              onClick={() => add()}
                              block
                              icon={<BiPlus />}
                            >
                              Add Adult Dosage
                            </Button>
                          </Form.Item>
                        </>
                      )}
                    </Form.List>

                    <h3 className="text-xl">Children</h3>
                    <Form.List name={["dosages", "children"]}>
                      {(fields, { add, remove }) => (
                        <>
                          {fields.map(
                            ({ key, name, fieldKey, ...restField }) => (
                              <Space
                                key={key}
                                style={{ display: "flex", marginBottom: 8 }}
                                align="baseline"
                              >
                                <Form.Item
                                  {...restField}
                                  name={[name, "dosage"]}
                                  fieldKey={[fieldKey, "dosage"]}
                                  rules={[
                                    {
                                      required: true,
                                      message:
                                        "Please provide dosage for adults",
                                    },
                                  ]}
                                >
                                  <Input placeholder="Dosage for adults" />
                                </Form.Item>
                                <BiMinus onClick={() => remove(name)} />
                              </Space>
                            )
                          )}
                          <Form.Item>
                            <Button
                              type="dashed"
                              onClick={() => add()}
                              block
                              icon={<BiPlus />}
                            >
                              Add Child Dosage
                            </Button>
                          </Form.Item>
                        </>
                      )}
                    </Form.List>
                  </>
                )}
              </div>
            </div>
          )}
          {current === 2 && (
            <div className="mt-10">
              <h2>Upload Images</h2>
              <Form.Item
                label="Plant Image"
                name="image"
                rules={[
                  {
                    required: true,
                    message: "Please input plant image!",
                  },
                ]}
              >
                <UploadComponent />
              </Form.Item>
            </div>
          )}
        </div>

        <div className="flex w-full justify-end items-center space-x-4">
          <Form.Item>
            <Button
              type="secondary"
              htmlType="button"
              style={{ height: "40px", border: "1px solid #ddd" }}
              className="text-lg"
              onClick={handleBack}
            >
              Prev
            </Button>
          </Form.Item>
          <Form.Item style={{}}>
            <Button
              type="primary"
              htmlType={current === 1 ? "submit" : "button"}
              style={{ width: "100%", height: "40px" }}
              className="text-lg"
              onClick={handleNext}
            >
              Submit
            </Button>
          </Form.Item>
        </div>
      </Form>
    </DashboardLayout>
  );
};
export default AddPlant;
