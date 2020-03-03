import React, { FC, useState, ChangeEvent, FormEvent } from "react";
import { useMutation } from "react-apollo";
import PostInput from "./PostInput";
import { Mutation } from "../../../../graphql/_generated/types";
import { CREATE_POST } from "../../../../graphql/mutation/post";

const PostInputContainer: FC = () => {
  const [value, setValue] = useState<string>("");

  const [createPost, { data }] = useMutation<Mutation>(CREATE_POST);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await createPost({ variables: { data: { content: value } } });
  };

  return (
    <>
      <PostInput value={value} onChange={onChange} onSubmit={onSubmit} />
    </>
  );
};

export default PostInputContainer;
