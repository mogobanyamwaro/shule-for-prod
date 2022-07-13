import { Button } from '@shule/web/components';
import { InstitutionEnumStatus } from '@shule/backend/enums';
import {
  getAllInstitutionsAsync,
  useAppDispatch,
  useAppSelector,
  toglleInstitutionFeaturedAsync,
} from '@shule/web/redux';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function CustomTable() {
  const location = useLocation();
  const [isFeatured, setIsFeatured] = React.useState(false);
  const institutions = useAppSelector(
    (state) => state.institution.institutions
  );
  const loading = useAppSelector((state) => state.institution.loading);
  const dispatch = useAppDispatch();
  useEffect(() => {
    try {
      const url = location.pathname.split('/');
      const id = url[url.length - 1];

      dispatch(getAllInstitutionsAsync());
    } catch (error) {
      console.log(error);
    }
  }, [dispatch, location]);

  if (loading) return <div>Loading...</div>;
  console.log(institutions);
  return (
    <table className="shadow-lg bg-table md:max-w-3xl ">
      <tr className="">
        <th className="bg-blue-100  text-left px-2 py-4 md:px-32 ">School</th>
        <th className="bg-blue-100  text-left px-2 py-4 md:px-32  ">
          DESCRIPTION
        </th>
        <th className="bg-blue-100  text-left px-2 py-4 md:px-32  ">STATUS</th>
        <th className="bg-blue-100  text- -2 py-4 md:px-32  ">FEATURED</th>
      </tr>

      {institutions.map((institution) => {
        return (
          <tr className="">
            <td className="bg-white text-left px-2 py-4 md:px-32 ">
              {institution.name}
            </td>
            <td className="bg-white text-left px-2 py-4 md:px-32  ">
              {institution.about.length > 100
                ? institution.about.substring(0, 50) + '...'
                : institution.about}
            </td>
            <td
              className={`${
                institution.status === InstitutionEnumStatus.PENDING &&
                'text-main'
              } ${
                institution.status === InstitutionEnumStatus.VERIFIED &&
                'text-green'
              } ${
                institution.status === InstitutionEnumStatus.INACTIVE &&
                'text-grayDark'
              } ${
                institution.status === InstitutionEnumStatus.REJECTED &&
                'text-primaryDark'
              } px-2 py-4 md:px-32`}
            >
              {institution.status}
            </td>
            {institution.isFeatured ? (
              <td className="px-2 py-4 md:px-32 ">
                <Button
                  bgColor="bg-primaryDark"
                  bgColorHover="bg-primaryDark"
                  onClick={() =>
                    dispatch(toglleInstitutionFeaturedAsync(institution.id))
                  }
                  px="px-3"
                  py="py-2"
                  textColor="text-main"
                >
                  Remove
                </Button>
              </td>
            ) : (
              <td className="px-2 py-4 md:px-32 ">
                <Button
                  bgColor="bg-primaryDark"
                  bgColorHover="bg-primaryDark"
                  onClick={() =>
                    dispatch(toglleInstitutionFeaturedAsync(institution.id))
                  }
                  px="px-3"
                  py="py-2"
                  textColor="text-main"
                >
                  Add
                </Button>
              </td>
            )}
          </tr>
        );
      })}
    </table>
  );
}

export default CustomTable;
