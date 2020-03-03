import React, { FC, ChangeEvent, FormEvent } from "react";
import { Container, TextArea, StyledButton } from "./Styles";

export interface PostInputProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: FormEvent) => void;
}

const PostInput: FC<PostInputProps> = ({ onSubmit, ...props }) => {
  return (
    <>
      <Container>
        <form onSubmit={onSubmit}>
          <TextArea
            variant="outlined"
            multiline
            rows={3}
            placeholder="What's on your mind?..."
            {...props}
          />
          <StyledButton variant="contained" type="submit" color="primary">
            Post
          </StyledButton>
        </form>
      </Container>
    </>
  );
};

export default PostInput;
