import { parserErrorMessage } from '@shule/web/helpers';
import { createSlice } from '@reduxjs/toolkit';
import {
  createInstitutionProfileAsync,
  getAllInstitutionsAsync,
  getOneInstitutionsAsync,
  toglleInstitutionFeaturedAsync,
} from './institution.action';
import { InstitutionInterface } from './institution.service';
import { InstitutionEnumStatus } from '@shule/backend/enums';

interface IgetAllInstitutions extends InstitutionInterface {
  id: string;
}

export interface InstitutionState {
  loading: boolean;
  error: string | null;
  institution: InstitutionInterface;
  institutions: IgetAllInstitutions[];
}

const initialState: InstitutionState = {
  loading: false,
  error: null,
  institution: {
    about: '',
    educationLevel: '',
    educationType: '',
    email: '',
    isFeatured: false,
    facebookLink: '',
    instagramLink: '',
    licenseAndCertification: '',
    location: '',
    performanceStatistics: '',
    phone: '',
    schoolPhotos: [],
    status: InstitutionEnumStatus.PENDING,
  },

  institutions: [
    {
      id: '',
      about: '',
      educationLevel: '',
      isFeatured: false,
      educationType: '',
      email: '',
      facebookLink: '',
      instagramLink: '',
      licenseAndCertification: '',
      location: '',
      performanceStatistics: '',
      phone: '',
      schoolPhotos: [],
      status: InstitutionEnumStatus.PENDING,
    },
  ],
};

const institutionSlice = createSlice({
  name: 'institution',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createInstitutionProfileAsync.pending, (state: any, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createInstitutionProfileAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.institution = action.payload;
      })
      .addCase(createInstitutionProfileAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = parserErrorMessage(action.error);
      })
      .addCase(getAllInstitutionsAsync.pending, (state: any, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllInstitutionsAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.institutions = action.payload;
      })
      .addCase(getAllInstitutionsAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = parserErrorMessage(action.error);
      })
      .addCase(getOneInstitutionsAsync.pending, (state: any, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getOneInstitutionsAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.institution = action.payload;
      })
      .addCase(getOneInstitutionsAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = parserErrorMessage(action.error);
      })
      .addCase(toglleInstitutionFeaturedAsync.pending, (state: any, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(toglleInstitutionFeaturedAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.institution = action.payload;
      })
      .addCase(toglleInstitutionFeaturedAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = parserErrorMessage(action.error);
      });
  },
});

export const institutionReducer = institutionSlice.reducer;
