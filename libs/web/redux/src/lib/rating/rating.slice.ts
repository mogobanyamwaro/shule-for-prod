import { parserErrorMessage } from '@shule/web/helpers';
import { createSlice } from '@reduxjs/toolkit';
import { createRatingAsync, getInstitutionRatingsAsync } from './rating.action';
import { RatingInterface } from './rating.service';
import { InstitutionEnumStatus, RatingEnumType } from '@shule/backend/enums';

interface IgetRating extends RatingInterface {
  id: string;
}

export interface RatingState {
  loading: boolean;
  error: string | null;
  rating: IgetRating;
  ratings: {
    totalRatings: number;
    ratings: IgetRating[];
  };
}

const initialState: RatingState = {
  loading: false,
  error: null,
  rating: {
    id: '',
    ratingValue: 0,
    comment: '',
    ratingType: RatingEnumType.INSTITUTION_RATING,
    user: {
      id: '',
      profile: {
        avatar: '',
        firstName: '',
        lastName: '',
      },
      username: '',
    },
  },

  ratings: {
    totalRatings: 0,
    ratings: [
      {
        id: '',
        comment: '',
        ratingType: RatingEnumType.INSTITUTION_RATING,
        ratingValue: 0,
        user: {
          id: '',
          profile: {
            avatar: '',
            firstName: '',
            lastName: '',
          },
          username: '',
        },
      },
    ],
  },
};

const ratingSlice = createSlice({
  name: 'rating',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createRatingAsync.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createRatingAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.rating = action.payload;
      })
      .addCase(createRatingAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = parserErrorMessage(action.error);
      })
      .addCase(getInstitutionRatingsAsync.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getInstitutionRatingsAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.ratings = action.payload;
      })
      .addCase(getInstitutionRatingsAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = parserErrorMessage(action.error);
      });
  },
});

export const ratingReducer = ratingSlice.reducer;
