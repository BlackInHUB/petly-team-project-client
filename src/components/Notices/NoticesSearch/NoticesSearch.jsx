import { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { helpers } from 'utils/helpers';
import {
  Form,
  Label,
  Input,
  IconSearch,
  IconClose,
} from './NoticesSearch.styled';
import Box from 'components/Common/Box';
import ButtonIcon from 'components/Common/ButtonIcon';

function NoticesSearch({ handleSearch }) {
  const [submitBtn, setSubmitBtn] = useState('search');

  const validationSchema = yup.object({
    search: yup.string('Enter you search info').trim(),
  });

  const formik = useFormik({
    initialValues: {
      search: '',
    },
    validationSchema: validationSchema,
    onSubmit: handleSubmit,
  });

  function handleSubmit({ search }) {
    if (submitBtn === 'search') {
      const q = helpers.delSpaces(search);
      if (Boolean(q.length > 0)) {
        handleSearch(q);
      }
    }
    setSubmitBtn('search');
    formik.resetForm();
  }

  return (
    <>
      <Form onSubmit={formik.handleSubmit}>
        <Box position="relative">
          <Label htmlFor="search" />
          <Input
            id="search"
            type="text"
            name="search"
            autoComplete="off"
            onChange={formik.handleChange}
            placeholder="Search"
            value={formik.values.search}
            variant="standard"
            aria-describedby="search info"
          />
          <Box position="absolute" right="10px" top="10px">
            {Boolean(formik.values.search.length > 0) ? (
              <ButtonIcon type="submit" aria-label="search button">
                <IconClose onClick={() => setSubmitBtn('erase')} />
              </ButtonIcon>
            ) : (
              <ButtonIcon type="submit" aria-label="search button">
                <IconSearch /* onClick={() => setSubmitBtn('search')}  */ />
              </ButtonIcon>
            )}
          </Box>
        </Box>
      </Form>
    </>
  );
}

export default NoticesSearch;

//TODO прописати пропси
