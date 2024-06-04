import React from "react";
import Input from "../../../../components/Input";
import TextArea from "../../../../components/TextArea";
import Select from "../../../../components/Select";
import { useSelector } from "react-redux";

const Step1 = ({
  errors,
  control,
  register,
  handleInputChange,
  plant,
  handleCategoryChange,
}) => {
  const { categories } = useSelector((state) => state.category);
  return (
    <div>
      <div className="flex flex-col gap-2 mt-5">
        <div>
          <Input
            labelFor={"name"}
            labelText={"Name"}
            name={"title"}
            customClass="w-full"
            inputStyle={"bg-lightGrey rounded-lg border-0"}
            placeholder={"Enter name of plant"}
            isRequired={false}
            onChange={handleInputChange}
            register={register}
            errors={errors}
          />
        </div>

        <div>
          <Input
            labelFor={"name"}
            labelText={"Scientific name"}
            name={"scientificName"}
            customClass="w-full"
            inputStyle={"bg-lightGrey rounded-lg border-0"}
            placeholder={"Enter Scientific name"}
            isRequired={false}
            onChange={handleInputChange}
            register={register}
            errors={errors}
          />
        </div>

        <Input
          labelFor={"commonName"}
          labelText={"Common name"}
          name={"commonName"}
          customClass="w-full"
          inputStyle={"bg-lightGrey rounded-lg border-0"}
          placeholder={"Enter Common name"}
          isRequired={false}
          onChange={handleInputChange}
          register={register}
          errors={errors}
        />

        <Select
          label="Plant Category"
          className="w-full mb-2"
          isDisabled={false}
          placeholder={"Select category"}
          options={categories.map((type) => {
            return {
              value: type._id,
              label: type.title.toLowerCase(),
            };
          })}
          handleChange={handleCategoryChange}
          register={{
            control,
            name: "category",
            rules: { required: "category is required" },
          }}
          error={errors["category"]?.message}
        />

        <TextArea
          labelFor={"description"}
          labelText={"Description"}
          name={"description"}
          customClass="w-full"
          inputStyle={"bg-lightGrey rounded-lg border-0"}
          placeholder={"Enter Description"}
          value={plant?.description}
          isRequired={false}
          onChange={handleInputChange}
          register={register}
          errors={errors}
        />

        <Input
          labelFor={"price"}
          labelText={"Price"}
          name={"price"}
          customClass="w-full"
          inputStyle={"bg-lightGrey rounded-lg border-0"}
          placeholder={"Enter price"}
          isRequired={false}
          onChange={handleInputChange}
          register={register}
          errors={errors}
        />
      </div>
    </div>
  );
};

export default Step1;
