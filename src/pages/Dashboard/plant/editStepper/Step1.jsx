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
  data,
  setData,
}) => {
  const { categories } = useSelector((state) => state.category);
  console.log("EDIT DATATA", data);
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
            value={data?.title}
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
            value={data?.scientificName}
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
          value={data?.commonName}
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
          defaultValue={{ value: data.category, label: data?.category }}
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
          inputStyle={"bg-lightGrey rounded-lg border-0 h-16"}
          placeholder={"Enter Description"}
          value={data?.description}
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
          value={data?.price}
          onChange={handleInputChange}
          register={register}
          errors={errors}
        />
      </div>
    </div>
  );
};

export default Step1;
