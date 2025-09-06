import { baseApi } from "./baseApi";

const routesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // getCount: builder.query({
    //     query: () => {
    //         return {
    //             url: `/meta/get-dashboard-meta-data`,
    //             method: "GET",
    //         };
    //     },
    //     providesTags: ["updateProfile"],
    // }),

    // getAllBusiness: builder.query({
    //     query: () => {
    //         return {
    //             url: `business/all-business`,
    //             method: "GET",
    //         };
    //     },
    //     providesTags: ["updateProfile"],
    // }),

    // getUserGrowth: builder.query({
    //     query: (year) => {
    //         return {
    //             url: `/meta/user-chart-data?year=${year}`,
    //             method: "GET",
    //         };
    //     },
    //     providesTags: ["updateProfile"],
    // }),

    // getFaq: builder.query({
    //     query: () => {
    //         return {
    //             url: `/manage/get-faq`,
    //             method: "GET",
    //         };
    //     },
    //     providesTags: ["updateProfile"],
    // }),

    addChassis: builder.mutation({
      query: (data) => {
        return {
          url: "/chassis/add-chassis",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["updateProfile"],
    }),

    //     updateFaq: builder.mutation({
    //       query: ({ formData, id }) => {
    //         return {
    //           url: `/faq/update-faq?faqId=${id}`,
    //           method: "PATCH",
    //           body: formData,
    //         };
    //       },
    //       invalidatesTags: ["updateProfile"],
    //     }),

    //     deleteFaq: builder.mutation({
    //       query: (id) => {
    //         return {
    //           url: `/faq/delete-faq?faqId=${id}`,
    //           method: "DELETE",
    //         };
    //       },
    //       invalidatesTags: ["updateProfile"],
    //     }),

    //     getTermsConditions: builder.query({
    //       query: () => {
    //         return {
    //           url: "/home/get-terms-condition",
    //           method: "GET",
    //         };
    //       },
    //       providesTags: ["terms"],
    //     }),
    //     postSubscriber: builder.mutation({
    //       query: (email) => {
    //         return {
    //           url: "/subscriber/create-subscriber",
    //           method: "POST",
    //           body: email,
    //         };
    //       },
    //       invalidatesTags: ["terms"],
    //     }),

    //     postSchedule: builder.mutation({
    //       query: (data) => {
    //         return {
    //           url: "/schedule/make-schedule",
    //           method: "POST",
    //           body: data,
    //         };
    //       },
    //       invalidatesTags: ["terms"],
    //     }),

    //     getPrivecy: builder.query({
    //       query: () => {
    //         return {
    //           url: "home/get-privacy-policy",
    //           method: "GET",
    //         };
    //       },
    //       providesTags: ["terms"],
    //     }),

    addInsurance: builder.mutation({
      query: (data) => {
        return {
          url: "/insurance-company/create",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["terms"],
    }),

    addTire: builder.mutation({
      query: (data) => {
        return {
          url: "/tire/add-tire",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["terms"],
    }),

    addAirCondition: builder.mutation({
      query: (data) => {
        return {
          url: "/air-condition/create",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["terms"],
    }),

    addHeater: builder.mutation({
      query: (data) => {
        return {
          url: "/heater/create",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["terms"],
    }),

    addWaterPump: builder.mutation({
      query: (data) => {
        return {
          url: "/water-pump/create",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["terms"],
    }),

    addWasher: builder.mutation({
      query: (data) => {
        return {
          url: "/water-pump/create",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["terms"],
    }),
    addWaterHeater: builder.mutation({
      query: (data) => {
        return {
          url: "/water-heater/create",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["terms"],
    }),

    addToilet: builder.mutation({
      query: (data) => {
        return {
          url: "/toilet/create",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["terms"],
    }),
     addTv: builder.mutation({
      query: (data) => {
        return {
          url: "/tv/create",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["terms"],
    }),

       addDriyer: builder.mutation({
      query: (data) => {
        return {
          url: "/dryer/create",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["terms"],
    }),
       addExhaustFans: builder.mutation({
      query: (data) => {
        return {
          url: "/exhaust-fans/create",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["terms"],
    }),

        addVentFans: builder.mutation({
      query: (data) => {
        return {
          url: "/vent-fans/create",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["terms"],
    }),
     addDisherInfo: builder.mutation({
      query: (data) => {
        return {
          url: "/dishwasher/create",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["terms"],
    }),

    addCallingFans: builder.mutation({
      query: (data) => {
        return {
          url: "/celling-fans/create",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["terms"],
    }),


    addDvdInfo: builder.mutation({
      query: (data) => {
        return {
          url: "/dvd/create",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["terms"],
    }),

        addGps: builder.mutation({
      query: (data) => {
        return {
          url: "/gps/create",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["terms"],
    }),

     addOutdoor: builder.mutation({
      query: (data) => {
        return {
          url: "/outdoor-radio/create",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["terms"],
    }),

      addSurroundSound: builder.mutation({
      query: (data) => {
        return {
          url: "/surround-sound/create",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["terms"],
    }),

      addInternetSatettling: builder.mutation({
      query: (data) => {
        return {
          url: "/internet-satellite/create",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["terms"],
    }),

       addRouter: builder.mutation({
      query: (data) => {
        return {
          url: "/wifi-router/create",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["terms"],
    }),

      addMaintance: builder.mutation({
      query: (data) => {
        return {
          url: "/maintenance-schedule/create",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["terms"],
    }),

       addMember: builder.mutation({
      query: (data) => {
        return {
          url: "/membership/create",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["terms"],
    }),


    // postPrivecy: builder.mutation({
    //     query: (data) => {
    //         return {
    //             url: "/manage/add-privacy-policy",
    //             method: "POST",
    //             body: data,
    //         };
    //     },
    //     invalidatesTags: ["terms"],
    // }),
  }),
});

export const {
  useAddChassisMutation,
  useAddInsuranceMutation,
  useAddTireMutation,
  useAddAirConditionMutation,
  useAddHeaterMutation,
  useAddWaterPumpMutation,
  useAddWasherMutation,
  useAddWaterHeaterMutation,
  useAddToiletMutation,
  useAddTvMutation,
  useAddDriyerMutation,
  useAddExhaustFansMutation,
  useAddVentFansMutation,
  useAddDisherInfoMutation,
  useAddCallingFansMutation,
  useAddDvdInfoMutation,
  useAddGpsMutation,
  useAddOutdoorMutation,
  useAddSurroundSoundMutation,
  useAddInternetSatettlingMutation,
  useAddRouterMutation,
  useAddMaintanceMutation,
  useAddMemberMutation
} = routesApi;
