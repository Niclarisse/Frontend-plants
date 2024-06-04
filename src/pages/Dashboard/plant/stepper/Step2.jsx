import { Button, Form, Input, Radio, Select, Space, Steps } from "antd";
import { BiMinus, BiPlus } from "react-icons/bi";
import { FiMinus } from "react-icons/fi";

const Step2 = ({
  usages,
  setUsages,
  sideEffects,
  setSideEffects,
  dosages,
  setDosages,
  partToUse,
  setPartToUse,
  howToUse,
  setHowToUse,
  cautions,
  setCautions,
  precautions,
  setPrecautions,
  setDosageType,
  dosageType,
  measurements,
  setMeasurements,
}) => {
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
  // all
  const addAllDosage = () => {
    setDosages({ ...dosages, all: [...dosages.all, ""] });
  };

  const removeAllDosage = (index) => {
    const newDosages = dosages.all.filter((_, i) => i !== index);
    setDosages({ ...dosages, all: newDosages });
  };

  const handleAllDosagesChange = (index, event) => {
    const newDosages = [...dosages.all];
    newDosages[index] = event.target.value;
    setDosages({ ...dosages, all: newDosages });
  };

  // adults
  const addAdultsDosage = () => {
    setDosages({ ...dosages, adults: [...dosages.adults, ""] });
  };

  const removeAdultsDosage = (index) => {
    const newDosages = dosages.adults.filter((_, i) => i !== index);
    setDosages({ ...dosages, adults: newDosages });
  };

  const handleAdultsDosagesChange = (index, event) => {
    const newDosages = [...dosages.adults];
    newDosages[index] = event.target.value;
    setDosages({ ...dosages, adults: newDosages });
  };

  // children
  const addChildDosage = () => {
    setDosages({ ...dosages, children: [...dosages.children, ""] });
  };

  const removeChildDosage = (index) => {
    const newDosages = dosages.children.filter((_, i) => i !== index);
    setDosages({ ...dosages, children: newDosages });
  };

  const handleChildDosagesChange = (index, event) => {
    const newDosages = [...dosages.children];
    newDosages[index] = event.target.value;
    setDosages({ ...dosages, children: newDosages });
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
  // precaution
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

  //   measurement
  const addMeasurement = () => {
    setMeasurements([...measurements, ""]);
  };

  const removeMeasurement = (index) => {
    const newSideEffects = measurements.filter((_, i) => i !== index);
    setMeasurements(newSideEffects);
  };

  const handleMeasurementChange = (index, event) => {
    const newSideEffects = measurements.map((effect, i) =>
      i === index ? event.target.value : effect
    );
    setMeasurements(newSideEffects);
  };

  return (
    <div className="mt-10">
      <span className="text-lg">Medecinal use</span>
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
      <span className="text-lg">Part to use</span>
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
        <h2 className="mt-10 text-lg font-medium">Preparation</h2>
        <Form.Item name="dosageType" label="Dosage Type">
          <Radio.Group
            onChange={(e) => setDosageType(e.target.value)}
            value={dosageType}
          >
            <Radio value="all" checked={true}>
              All
            </Radio>
            <Radio value="separate" checked={dosageType === "separate"}>
              Separate for Adults and Children
            </Radio>
          </Radio.Group>
        </Form.Item>

        {dosageType === "all" && (
          <div>
            {dosages.all.map((dose, index) => (
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
                    onChange={(event) => handleAllDosagesChange(index, event)}
                  />

                  <Button
                    type="danger"
                    onClick={() => removeAllDosage(index)}
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
              <Button type="dashed" onClick={addAllDosage}>
                Add preparation
              </Button>
            </Form.Item>
          </div>
        )}

        {dosageType === "separate" && (
          <>
            <h3 className="text-xl">Adults</h3>
            {dosages.adults.map((dose, index) => (
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
                    onChange={(event) =>
                      handleAdultsDosagesChange(index, event)
                    }
                  />

                  <Button
                    type="danger"
                    onClick={() => removeAdultsDosage(index)}
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
              <Button type="dashed" onClick={addAdultsDosage}>
                Add preparation
              </Button>
            </Form.Item>

            <h3 className="text-xl">Children</h3>
            {dosages.children.map((dose, index) => (
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
                    onChange={(event) => handleChildDosagesChange(index, event)}
                  />

                  <Button
                    type="danger"
                    onClick={() => removeChildDosage(index)}
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
              <Button type="dashed" onClick={addChildDosage}>
                Add preparation
              </Button>
            </Form.Item>
          </>
        )}

        {measurements.map((dose, index) => (
          <Form.Item
            key={index}
            label={`Preparation ${index + 1}`}
            required
            rules={[
              {
                required: true,
                message: "Please provide plant measurement",
              },
            ]}
          >
            <div className="flex space-x-10">
              <Input
                placeholder="Provide plant measurements"
                value={dose}
                onChange={(event) => handleMeasurementChange(index, event)}
              />

              <Button
                type="danger"
                onClick={() => removeMeasurement(index)}
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
          <Button type="dashed" onClick={addMeasurement}>
            Add measurements:
          </Button>
        </Form.Item>
      </div>
    </div>
  );
};

export default Step2;
