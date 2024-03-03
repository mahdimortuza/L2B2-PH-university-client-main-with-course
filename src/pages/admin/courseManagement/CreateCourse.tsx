import { Button, Col, Flex } from "antd";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import PHForm from "../../../components/form/PHForm";
import PHInput from "../../../components/form/PHInput";
import PHSelect from "../../../components/form/PHSelect";
import {
  useAddRegisteredSemestersMutation,
  useGetAllCoursesQuery,
} from "../../../redux/features/admin/courseManagement.api";

const CreateCourse = () => {
  const [addSemester] = useAddRegisteredSemestersMutation();
  const { data: courses } = useGetAllCoursesQuery(undefined);

  const preRequisiteCoursesOptions = courses?.data?.map((item) => ({
    value: item._id,
    label: item.title,
  }));

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Creating a semester");

    const courseData = {
      ...data,
      isDeleted: false,
      preRequisiteCourses: data.preRequisiteCourses.map((item) => ({
        course: item,
        isDeleted: "false",
      })),
    };
    console.log(courseData);

    // try {
    //   const res = (await addSemester(semesterData)) as TResponse<any>;
    //   if (res.error) {
    //     toast.error(res.error.data.message, { id: toastId, duration: 3000 });
    //   } else {
    //     toast.success("semester is created", { id: toastId, duration: 3000 });
    //   }
    // } catch (error) {
    //   toast.error("something went wrong", { id: toastId, duration: 3000 });
    // }
  };

  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <PHForm onSubmit={onSubmit}>
          <PHInput type="text" name="title" label="Title" />
          <PHInput type="text" name="prefix" label="Prefix" />
          <PHInput type="text" name="code" label="Code" />
          <PHInput type="text" name="credits" label="Credits" />
          <PHSelect
            mode="multiple"
            options={preRequisiteCoursesOptions}
            name="preRequisiteCourses"
            label="preRequisiteCourses"
          />

          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Flex>
  );
};

export default CreateCourse;
