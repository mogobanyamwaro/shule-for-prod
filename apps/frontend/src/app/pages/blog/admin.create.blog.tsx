import { Button, Footer, Input } from '@shule/web/components';
import { Navbar } from '@shule/web/containers';
import { ChangeEvent, useEffect, useState } from 'react';
import htmlToDraft from 'html-to-draftjs';
import draftToHtml from 'draftjs-to-html';
import { ContentState, EditorState, convertToRaw } from 'draft-js';
import Logo from '../../../assets/Logo.png';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { useNavigate } from 'react-router-dom';
import { createBlogAsync, useAppDispatch } from '@shule/web/redux';
import { uploadsService } from 'libs/web/redux/src/lib/uploads/uploads.service';

function AdminCreateBlog() {
  const [editorState, setEditorState] = useState<EditorState>(
    EditorState.createEmpty()
  );
  const [content, setContent] = useState<string>('');
  const [headline, setHeadline] = useState<string>('');
  const [image, setImage] = useState<File>();
  const [imagePreview, setImagePreview] = useState<string>('');
  const dispatch = useAppDispatch();

  const onFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    // @ts-ignore
    setImagePreview(URL.createObjectURL(e.target.files[0]));
    // @ts-ignore
    setImage(e.target.files[0]);
    const reader = new FileReader();
    reader.onload = (event) => {
      if (reader.readyState === 2) {
        // @ts-ignore
      }
    };
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    // @ts-ignore
    formData.append('file', image, image.name);
    const newImageUrl = await uploadsService.uploadFile(formData);
    const data = {
      title: headline,
      content: content,
      image: newImageUrl.url,
    };
    console.log(data);
    dispatch(createBlogAsync(data));
  };

  const navigate = useNavigate();

  return (
    <div>
      <Navbar Logo={Logo} />
      <div className="pt-24 px-5">
        <h1 className="font-bold text-main text-2xl py-4">
          This is your creative space...
        </h1>
        <div className="flex justify-between items-center md:max-w-xl">
          <div className="bg-main h-44 w-44 md:h-56 md:w-56">
            {imagePreview && <img src={imagePreview} alt="Preview" />}
          </div>
          <div className="md:max-w-xs">
            {' '}
            <Input
              bgColor="bg-primaryDark"
              py="px-2"
              name="image"
              type="file"
              OnChange={onFileChange}
            />
          </div>
        </div>
        <div className="md:max-w-5xl md:mx-auto py-3">
          <h1 className=" text-xl font-bold text-main">Title</h1>
          <Input
            bgColor="bg-primaryDark"
            py="py-2"
            value={headline}
            name="headline"
            OnChange={(e) => setHeadline(e.target.value)}
          />
        </div>
        <div
          style={{
            padding: '2px',
            minHeight: '400px',
          }}
          className="border border-primaryDark mt-3"
        >
          <Editor
            editorState={editorState}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            onEditorStateChange={(newState) => {
              setEditorState(newState);
              setContent(
                draftToHtml(convertToRaw(newState.getCurrentContent()))
              );
            }}
          />
        </div>
        <div>
          <div className="flex justify-end py-5">
            <Button
              bgColor="bg-primaryDark"
              bgColorHover="bg-primaryDark"
              px="px-8"
              py="py-2"
              // onClick={() => navigate('/blog-details/123')}
              onClick={handleSubmit}
              textColor="text-main"
            >
              Post Blog
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AdminCreateBlog;
