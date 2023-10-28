"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import React, { useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { useForm } from "react-hook-form";
import { QuestionSchema } from "@/lib/validations";
import { Badge } from "../ui/badge";
import Image from "next/image";
import { createQuestion } from "@/lib/actions/question.action";


const type:any = 'create'


const  Question = () => {
  const editorRef = useRef(null);
  const [IsSubmitting, setIsSubmitting] = useState<boolean>(false);


  const form = useForm<z.infer<typeof QuestionSchema>>({
    resolver: zodResolver(QuestionSchema),
    defaultValues: {
      title: "",
      explaination: "",
      tags: [],
    },
  });

  async function onSubmit(values: z.infer<typeof QuestionSchema>) {
    setIsSubmitting(true);

    try {
      await createQuestion({});
    } catch (error) {
      
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputKeyDown = (e : React.KeyboardEvent<HTMLInputElement>, field : any ) => {
    if (e.key === 'Enter' && field.name === 'tags') {
      e.preventDefault();

      const tagInput = e.target as HTMLInputElement;
      const tagValue = tagInput.value.trim();

      if(tagValue !== '') {
        if(tagValue.length > 15) {
          return form.setError('tags', {
            type : 'required',
            message : 'Tag must be less than 15 Characters '
          })
        }

        if(!field.value.includes(tagValue as never)){
          form.setValue('tags',[...field.value,tagValue]);
          tagInput.value =''
          form.clearErrors('tags');
        }
      } else {
        form.trigger();
      }
    }
  }

  const handleTagRemove = (tag :string, field:any) => {
    const NewTags = field.value.filter((t:string) => t !== tag);
    form.setValue('tags',NewTags);
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-10"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="paragraph-semibold text-dark-400 dark:text-light-800">
                Question Title <span className="text-primary-500">*</span>
              </FormLabel>
              <FormControl className="mt-3.5">
                <Input
                  className="no-focus paragraph-regular bg-light-700 dark:bg-dark-300 light-border-2 text-dark-200 dark:text-light-700 min-h-[56px] border"
                  {...field}
                />
              </FormControl>
              <FormDescription className="body-regular mt-2.5 text-light-500">
                Be specific and imagine you&apos;re asking a question to another
                person.
              </FormDescription>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="explaination"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col gap-3">
              <FormLabel className="paragraph-semibold text-dark-400 dark:text-light-800">
                Detailed explanation of your problem !
                <span className="text-primary-500">*</span>
              </FormLabel>
              <FormControl className="mt-3.5">
              <Editor
              apiKey={process.env.NEXT_PUBLIC_TINY_EDITOR_API_KEY}
         onInit={(evt, editor) => {
          // @ts-ignore  
          editorRef.current = editor
        }}
        onBlur={field.onBlur}
        onEditorChange={(content) => field.onChange(content)}
         initialValue=""
         init={{
           height: 500,
           menubar: false,
           plugins: [
            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview', 'anchor',
            'searchreplace', 'visualblocks', 'codesample', 'fullscreen',
            'insertdatetime', 'media', 'table'
           ],
           toolbar: 'undo redo | ' +
           'codesample | bold italic forecolor | alignleft aligncenter ' +
           'alignright alignjustify | bullist numlist ' +
           'removeformat | help',
           content_style: 'body { font-family:Inter; font-size:16px }'
         }}
       />
              </FormControl>
              <FormDescription className="body-regular mt-2.5 text-light-500">
                Introduce the problem and expand on what you put in the title.
                Minimum 20 characters.
              </FormDescription>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="tags"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="paragraph-semibold text-dark-400 dark:text-light-800">
                Tags <span className="text-primary-500">*</span>
              </FormLabel>
              <FormControl className="mt-3.5">
                <>
                
                <Input
                  className="no-focus paragraph-regular bg-light-700 dark:bg-dark-300 light-border-2 text-dark-200 dark:text-light-700 min-h-[56px] border"
                  placeholder="Add Tags ..."
                  onKeyDown={(e) => handleInputKeyDown(e ,field)}
                />

                {field.value.length > 0 && (
                  <div className="flex start mt-2.5 gap-2.5">
                    {field.value.map((tag:any) => (
                      <Badge className="text-light-900 subtle-medium bg-light-800 dark:bg-dark-300 flex items-center justify-center gap-2 rounded-md border-none px-4 py-2 capitalize"
                      onClick={() => handleTagRemove(tag,field)}>
                        {tag}
                        <Image
                        className="invert cursor-pointer"
                        src='/assets/icons/close.svg'
                        alt='Close Btn'
                        width={12}
                        height={12} />
                      </Badge>
                    ))}
                  </div>
                )}
                </>
              </FormControl>
              <FormDescription className="body-regular mt-2.5 text-light-500">
                Add up to 3 tags to describe what your question is about. You
                need to press enter to add a tag.
              </FormDescription>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
        <Button 
        className="primary-gradient w-fit !text-light-900"
        type="submit" disabled={IsSubmitting}>
          {IsSubmitting ? (
            <>
             {type === 'edit' ? 'Editing' : 'Posting ...'}
            </>
          ): (

            <>
             {type === 'edit' ? 'Edit Question' : 'Ask a Question'}
            </>
          )}
        </Button>
      </form>
    </Form>
  );
};

export default Question;
