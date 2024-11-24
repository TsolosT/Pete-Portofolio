import React, { useEffect } from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from "yup";
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";

const ContactMeSection = () => {
  const { isLoading, response, submit } = useSubmit(); // useSubmit hook
  const { onOpen, onClose } = useAlertContext(); // Alert context to show alerts

  // Initialize Formik with validation and submission logic
  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      type: "",
      comment: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First name is required"),
      email: Yup.string().email("Invalid email format").required("Email is required"),
      type: Yup.string(),
      comment: Yup.string()
        .required("Message is required")
        .min(25, "Must be at least 25 characters"),
    }),
    onSubmit: async (values, { resetForm }) => {
      // Submit the form data using the submit function from the custom hook
      await submit("api", values);
    },
  });

  // Handle API response to show success or error alerts
  useEffect(() => {
    if (response) {
      // Check if the response is success or error
      if (response.type === "success") {
        onOpen(response.type, response.message); // Open success alert
        formik.resetForm(); // Reset form after successful submission
        setTimeout(() => onClose(), 3000); // Close alert after 3 seconds
      } else if (response.type === "error") {
        onOpen(response.type, response.message); // Open error alert
        setTimeout(() => onClose(), 3000); // Close alert after 3 seconds
      }
    }
  }, [response, formik, onOpen, onClose]); // Only run when `response` changes


  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#2A4365"
      py={16}
      spacing={8}
    >
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="contactme-section">
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%">
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>
              {/* Name Field */}
              <FormControl isInvalid={formik.touched.firstName && formik.errors.firstName}>
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  {...formik.getFieldProps("firstName")}
                />
                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
              </FormControl>

              {/* Email Field */}
              <FormControl isInvalid={formik.touched.email && formik.errors.email}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  {...formik.getFieldProps("email")}
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>

              {/* Type of Enquiry Field */}
              <FormControl isInvalid={formik.touched.type && formik.errors.type}>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select
                  id="type"
                  name="type"
                  placeholder="Select type"
                  {...formik.getFieldProps("type")}
                >
                  <option style={{ backgroundColor: "#2A4365", color: "white" }} value="hireMe">Freelance project proposal</option>
                  <option style={{ backgroundColor: "#2A4365", color: "white" }} value="openSource">Open source consultancy session</option>
                  <option style={{ backgroundColor: "#2A4365", color: "white" }} value="other">Other</option>
                </Select>
                <FormErrorMessage>{formik.errors.type}</FormErrorMessage>
              </FormControl>

              {/* Message Field */}
              <FormControl isInvalid={formik.touched.comment && formik.errors.comment}>
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  height={250}
                  {...formik.getFieldProps("comment")}
                />
                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
              </FormControl>

              {/* Submit Button */}
              <Button
                type="submit"
                colorScheme="teal"
                width="full"
                isLoading={isLoading} // Show loading indicator when submitting
              >
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default ContactMeSection;
