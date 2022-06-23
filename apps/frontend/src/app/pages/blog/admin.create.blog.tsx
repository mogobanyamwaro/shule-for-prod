import { Button, Footer } from '@shule/web/components';
import { Navbar } from '@shule/web/containers';
import { useEffect, useState } from 'react';
import htmlToDraft from 'html-to-draftjs';
import draftToHtml from 'draftjs-to-html';
import { ContentState, EditorState, convertToRaw } from 'draft-js';
import Logo from '../../../assets/Logo.png';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { useNavigate } from 'react-router-dom';

function AdminCreateBlog() {
  const [editorState, setEditorState] = useState<EditorState>(
    EditorState.createEmpty()
  );
  const [content, setContent] = useState<string>('');
  const [headline, setHeadline] = useState<string>('');
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
            <img src="" alt="" />
          </div>
          <div>
            {' '}
            <Button
              bgColor="bg-primaryDark"
              bgColorHover="bg-primaryDark"
              px="px-8"
              py="py-2"
              textColor="text-main"
            >
              Add image
            </Button>
          </div>
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
              onClick={() => navigate('/blog-details/123')}
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
