"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useRef, useState } from "react";

import emailjs from "@emailjs/browser";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const formSchema = z.object({
  name: z.string().min(1, {
    message: "Username is required",
  }),
  email: z.string().min(1, {
    message: "Email is required",
  }),
  subject: z.string().min(3, {
    message: "Comment is required",
  }),
});

const FormPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const formData = {
      name: values.name,
      email: values.email,
      subject: values.subject,
    };
    try {
      setIsLoading(true);

      if (formRef.current) {
        await emailjs
          .send(
            process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID!,
            process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID!,
            formData,
            process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY!
          )
          .then(
            (result) => {
              console.log("Email sent successfully. Result:", result);
              toast.success(`${result.text} sent successfully`);
              form.reset();
              router.refresh();
            },
            (error) => {
              console.error("Error sending email. Error:", error);
              toast.error("Something went wrong");
            }
          );
      }
    } catch (error) {
      console.error(
        "Email service or template not configured. Cannot submit the form."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Form {...form}>
        <motion.form
          ref={formRef}
          onSubmit={form.handleSubmit(onSubmit)}
          className="relative flex flex-col gap-[20px]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <FormField
            name="name"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    disabled={isLoading}
                    className="h-full p-[20px] bg-zinc-100 dark:bg-transparent border border-white rounded-[5px] focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0"
                    placeholder="Մուտքագրեք ձեր անունը"
                    {...field}
                    autoComplete="on"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="email"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    disabled={isLoading}
                    className="h-full p-[20px] bg-zinc-100 dark:bg-transparent border border-white rounded-[5px] focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0"
                    placeholder="Մուտքագրեք ձեր էլ․ հասցեն"
                    {...field}
                    autoComplete="on"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="subject"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    disabled={isLoading}
                    className="p-[20px] border border-white rounded-[5px] bg-zinc-100 dark:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 resize-none"
                    placeholder="Հաղորդագրություն..."
                    {...field}
                    rows={8}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {isLoading ? (
            <Button
              className="w-full h-full p-[14px] rounded-[5px] bg-neutral-600 hover:bg-neutral-600 flex items-center justify-center font-medium text-sky-950 cursor-not-allowed"
              disabled={isLoading}
              variant="default"
              aria-label="loading button"
            >
              <Loader2 className="w-8 h-8 animate-spin " />
            </Button>
          ) : (
            <Button
              aria-label="button to send data"
              variant="default"
              disabled={isLoading}
              className="h-full p-[20px] border-0 rounded-[5px] bg-[#0B5C6F] hover:bg-[#094858] font-semibold text-white"
            >
              Ուղարկել
            </Button>
          )}
        </motion.form>
      </Form>
    </>
  );
};

export default FormPage;
