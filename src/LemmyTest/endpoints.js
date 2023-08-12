const endpoints = {
  addAdmin: {
    method: 'POST',
    endpoint: '/admin/add',
    request: 'AddAdmin',
    response: 'AddAdminResponse'
  },
  addModToCommunity: {
    method: 'POST',
    endpoint: '/community/mod',
    request: 'AddModToCommunity',
    response: 'AddModToCommunityResponse'
  },
  approveRegistrationApplication: {
    method: 'PUT',
    endpoint: '/admin/registration_application/approve',
    request: 'ApproveRegistrationApplication',
    response: 'ApproveRegistrationApplicationResponse'
  },
  banFromCommunity: {
    method: 'POST',
    endpoint: '/community/ban_user',
    request: 'BanFromCommunity',
    response: 'BanFromCommunityResponse'
  },
  banPerson: {
    method: 'POST',
    endpoint: '/user/ban',
    request: 'BanPerson',
    response: 'BanPersonResponse'
  },
  blockCommunity: {
    method: 'POST',
    endpoint: '/community/block',
    request: 'BlockCommunity',
    response: 'BlockCommunityResponse'
  },
  blockPerson: {
    method: 'POST',
    endpoint: '/user/block',
    request: 'BlockPerson',
    response: 'BlockPersonResponse'
  },
  changePassword: {
    method: 'PUT',
    endpoint: '/user/change_password',
    request: 'ChangePassword',
    response: 'ChangePasswordResponse'
  },
  createComment: {
    method: 'POST',
    endpoint: '/comment',
    request: 'CreateComment',
    response: 'CreateCommentResponse'
  },
  createCommentReport: {
    method: 'POST',
    endpoint: '/comment/report',
    request: 'CreateCommentReport',
    response: 'CreateCommentReportResponse'
  },
  createCommunity: {
    method: 'POST',
    endpoint: '/community',
    request: 'CreateCommunity',
    response: 'CreateCommunityResponse'
  },
  createCustomEmoji: {
    method: 'POST',
    endpoint: '/custom_emoji',
    request: 'CreateCustomEmoji',
    response: 'CreateCustomEmojiResponse'
  },
  createPost: {
    method: 'POST',
    endpoint: '/post',
    request: 'CreatePost',
    response: 'CreatePostResponse'
  },
  createPostReport: {
    method: 'POST',
    endpoint: '/post/report',
    request: 'CreatePostReport',
    response: 'CreatePostReportResponse'
  },
  createPrivateMessage: {
    method: 'POST',
    endpoint: '/private_message',
    request: 'CreatePrivateMessage',
    response: 'CreatePrivateMessageResponse'
  },
  createPrivateMessageReport: {
    method: 'POST',
    endpoint: '/private_message/report',
    request: 'CreatePrivateMessageReport',
    response: 'CreatePrivateMessageReportResponse'
  },
  createSite: {
    method: 'POST',
    endpoint: '/site',
    request: 'CreateSite',
    response: 'CreateSiteResponse'
  },
  deleteAccount: {
    method: 'POST',
    endpoint: '/user/delete_account',
    request: 'DeleteAccount',
    response: 'DeleteAccountResponse'
  },
  deleteComment: {
    method: 'POST',
    endpoint: '/comment/delete',
    request: 'DeleteComment',
    response: 'DeleteCommentResponse'
  },
  deleteCommunity: {
    method: 'POST',
    endpoint: '/community/delete',
    request: 'DeleteCommunity',
    response: 'DeleteCommunityResponse'
  },
  deleteCustomEmoji: {
    method: 'Post',
    endpoint: '/custom_emoji/delete',
    request: 'DeleteCustomEmoji',
    response: 'DeleteCustomEmojiResponse'
  },
  deletePost: {
    method: 'POST',
    endpoint: '/post/delete',
    request: 'DeletePost',
    response: 'DeletePostResponse'
  },
  deletePrivateMessage: {
    method: 'POST',
    endpoint: '/private_message/delete',
    request: 'DeletePrivateMessage',
    response: 'DeletePrivateMessageResponse'
  },
  distinguishComment: {
    method: 'POST',
    endpoint: '/comment/distinguish',
    request: 'DistinguishComment',
    response: 'DistinguishCommentResponse'
  },
  editComment: {
    method: 'PUT',
    endpoint: '/comment',
    request: 'EditComment',
    response: 'EditCommentResponse'
  },
  editCommunity: {
    method: 'PUT',
    endpoint: '/community',
    request: 'EditCommunity',
    response: 'EditCommunityResponse'
  },
  editCustomEmoji: {
    method: 'PUT',
    endpoint: '/custom_emoji',
    request: 'EditCustomEmoji',
    response: 'EditCustomEmojiResponse'
  },
  editPost: {
    method: 'PUT',
    endpoint: '/post',
    request: 'EditPost',
    response: 'EditPostResponse'
  },
  editPrivateMessage: {
    method: 'PUT',
    endpoint: '/private_message',
    request: 'EditPrivateMessage',
    response: 'EditPrivateMessageResponse'
  },
  editSite: {
    method: 'PUT',
    endpoint: '/site',
    request: 'EditSite',
    response: 'EditSiteResponse'
  },
  featurePost: {
    method: 'POST',
    endpoint: '/post/feature',
    request: 'FeaturePost',
    response: 'FeaturePostResponse'
  },
  followCommunity: {
    method: 'POST',
    endpoint: '/community/follow',
    request: 'FollowCommunity',
    response: 'FollowCommunityResponse'
  },
  getBannedPersons: {
    method: 'GET',
    endpoint: '/user/banned',
    request: 'GetBannedPersons',
    response: 'GetBannedPersonsResponse'
  },
  getCaptcha: {
    method: 'GET',
    endpoint: '/user/get_captcha',
    request: 'GetCaptcha',
    response: 'GetCaptchaResponse'
  },
  getComment: {
    method: 'GET',
    endpoint: '/comment',
    request: 'GetComment',
    response: 'GetCommentResponse'
  },
  getComments: {
    method: 'GET',
    endpoint: '/comment/list',
    request: 'GetComments',
    response: 'GetCommentsResponse'
  },
  getCommunity: {
    method: 'GET',
    endpoint: '/community',
    request: 'GetCommunity',
    response: 'GetCommunityResponse'
  },
  getFederatedInstances: {
    method: 'GET',
    endpoint: '/federated_instances',
    request: 'GetFederatedInstances',
    response: 'GetFederatedInstancesResponse'
  },
  getModlog: {
    method: 'GET',
    endpoint: '/modlog',
    request: 'GetModlog',
    response: 'GetModlogResponse'
  },
  getPersonDetails: {
    method: 'GET',
    endpoint: '/user',
    request: 'GetPersonDetails',
    response: 'GetPersonDetailsResponse'
  },
  getPersonMentions: {
    method: 'GET',
    endpoint: '/user/mention',
    request: 'GetPersonMentions',
    response: 'GetPersonMentionsResponse'
  },
  getPost: {
    method: 'GET',
    endpoint: '/post',
    request: 'GetPost',
    response: 'GetPostResponse'
  },
  getPosts: {
    method: 'GET',
    endpoint: '/post/list',
    request: 'GetPosts',
    response: 'GetPostsResponse'
  },
  getPrivateMessages: {
    method: 'GET',
    endpoint: '/private_message/list',
    request: 'GetPrivateMessages',
    response: 'GetPrivateMessagesResponse'
  },
  getReplies: {
    method: 'GET',
    endpoint: '/user/replies',
    request: 'GetReplies',
    response: 'GetRepliesResponse'
  },
  getReportCount: {
    method: 'GET',
    endpoint: '/user/report_count',
    request: 'GetReportCount',
    response: 'GetReportCountResponse'
  },
  getSite: {
    method: 'GET',
    endpoint: '/site',
    request: 'GetSite',
    response: 'GetSiteResponse'
  },
  getSiteMetadata: {
    method: 'GET',
    endpoint: '/post/site_metadata',
    request: 'GetSiteMetadata',
    response: 'GetSiteMetadataResponse'
  },
  getUnreadCount: {
    method: 'GET',
    endpoint: '/user/unread_count',
    request: 'GetUnreadCount',
    response: 'GetUnreadCountResponse'
  },
  getUnreadRegistrationApplicationCount: {
    method: 'GET',
    endpoint: '/admin/registration_application/count',
    request: 'GetUnreadRegistrationApplicationCount',
    response: 'GetUnreadRegistrationApplicationCountResponse'
  },
  leaveAdmin: {
    method: 'POST',
    endpoint: '/user/leave_admin',
    request: 'LeaveAdmin',
    response: 'LeaveAdminResponse'
  },
  likeComment: {
    method: 'POST',
    endpoint: '/comment/like',
    request: 'LikeComment',
    response: 'LikeCommentResponse'
  },
  likePost: {
    method: 'POST',
    endpoint: '/post/like',
    request: 'LikePost',
    response: 'LikePostResponse'
  },
  listCommentReports: {
    method: 'GET',
    endpoint: '/comment/report/list',
    request: 'ListCommentReports',
    response: 'ListCommentReportsResponse'
  },
  listCommunities: {
    method: 'GET',
    endpoint: '/community/list',
    request: 'ListCommunities',
    response: 'ListCommunitiesResponse'
  },
  listPostReports: {
    method: 'GET',
    endpoint: '/post/report/list',
    request: 'ListPostReports',
    response: 'ListPostReportsResponse'
  },
  listPrivateMessageReports: {
    method: 'GET',
    endpoint: '/private_message/report/list',
    request: 'ListPrivateMessageReports',
    response: 'ListPrivateMessageReportsResponse'
  },
  listRegistrationApplications: {
    method: 'GET',
    endpoint: '/admin/registration_application/list',
    request: 'ListRegistrationApplications',
    response: 'ListRegistrationApplicationsResponse'
  },
  lockPost: {
    method: 'POST',
    endpoint: '/post/lock',
    request: 'LockPost',
    response: 'LockPostResponse'
  },
  login: {
    method: 'POST',
    endpoint: '/user/login',
    request: 'Login',
    response: 'LoginResponse'
  },
  markAllAsRead: {
    method: 'POST',
    endpoint: '/user/mark_all_as_read',
    request: 'MarkAllAsRead',
    response: 'MarkAllAsReadResponse'
  },
  markCommentReplyAsRead: {
    method: 'POST',
    endpoint: '/comment/mark_as_read',
    request: 'MarkCommentReplyAsRead',
    response: 'MarkCommentReplyAsReadResponse'
  },
  markPersonMentionAsRead: {
    method: 'POST',
    endpoint: '/user/mention/mark_as_read',
    request: 'MarkPersonMentionAsRead',
    response: 'MarkPersonMentionAsReadResponse'
  },
  markPostAsRead: {
    method: 'POST',
    endpoint: '/post/mark_as_read',
    request: 'MarkPostAsRead',
    response: 'MarkPostAsReadResponse'
  },
  markPrivateMessageAsRead: {
    method: 'POST',
    endpoint: '/private_message/mark_as_read',
    request: 'MarkPrivateMessageAsRead',
    response: 'MarkPrivateMessageAsReadResponse'
  },
  passwordChangeAfterReset: {
    method: 'POST',
    endpoint: '/user/password_change',
    request: 'PasswordChangeAfterReset',
    response: 'PasswordChangeAfterResetResponse'
  },
  passwordReset: {
    method: 'POST',
    endpoint: '/user/password_reset',
    request: 'PasswordReset',
    response: 'PasswordResetResponse'
  },
  purgeComment: {
    method: 'POST',
    endpoint: '/admin/purge/comment',
    request: 'PurgeComment',
    response: 'PurgeCommentResponse'
  },
  purgeCommunity: {
    method: 'POST',
    endpoint: '/admin/purge/community',
    request: 'PurgeCommunity',
    response: 'PurgeCommunityResponse'
  },
  purgePerson: {
    method: 'POST',
    endpoint: '/admin/purge/person',
    request: 'PurgePerson',
    response: 'PurgePersonResponse'
  },
  purgePost: {
    method: 'POST',
    endpoint: '/admin/purge/post',
    request: 'PurgePost',
    response: 'PurgePostResponse'
  },
  register: {
    method: 'POST',
    endpoint: '/user/register',
    request: 'Register',
    response: 'RegisterResponse'
  },
  removeComment: {
    method: 'POST',
    endpoint: '/comment/remove',
    request: 'RemoveComment',
    response: 'RemoveCommentResponse'
  },
  removeCommunity: {
    method: 'POST',
    endpoint: '/community/remove',
    request: 'RemoveCommunity',
    response: 'RemoveCommunityResponse'
  },
  removePost: {
    method: 'POST',
    endpoint: '/post/remove',
    request: 'RemovePost',
    response: 'RemovePostResponse'
  },
  resolveCommentReport: {
    method: 'PUT',
    endpoint: '/comment/report/resolve',
    request: 'ResolveCommentReport',
    response: 'ResolveCommentReportResponse'
  },
  resolveObject: {
    method: 'GET',
    endpoint: '/resolve_object',
    request: 'ResolveObject',
    response: 'ResolveObjectResponse'
  },
  resolvePostReport: {
    method: 'PUT',
    endpoint: '/post/report/resolve',
    request: 'ResolvePostReport',
    response: 'ResolvePostReportResponse'
  },
  resolvePrivateMessageReport: {
    method: 'PUT',
    endpoint: '/private_message/report/resolve',
    request: 'ResolvePrivateMessageReport',
    response: 'ResolvePrivateMessageReportResponse'
  },
  saveComment: {
    method: 'PUT',
    endpoint: '/comment/save',
    request: 'SaveComment',
    response: 'SaveCommentResponse'
  },
  savePost: {
    method: 'PUT',
    endpoint: '/post/save',
    request: 'SavePost',
    response: 'SavePostResponse'
  },
  saveUserSettings: {
    method: 'PUT',
    endpoint: '/user/save_user_settings',
    request: 'SaveUserSettings',
    response: 'SaveUserSettingsResponse'
  },
  search: {
    method: 'GET',
    endpoint: '/search',
    request: 'Search',
    response: 'SearchResponse'
  },
  transferCommunity: {
    method: 'POST',
    endpoint: '/community/transfer',
    request: 'TransferCommunity',
    response: 'TransferCommunityResponse'
  },
  uploadImage: {
    method: undefined,
    endpoint: undefined,
    request: 'UploadImage',
    response: 'UploadImageResponse'
  },
  verifyEmail: {
    method: 'POST',
    endpoint: '/user/verify_email',
    request: 'VerifyEmail',
    response: 'VerifyEmailResponse'
  }
}


function generate()
{
  let temp={

  };
  for(const [key, value] of Object.entries(endpoints))
  {
    temp[key] = {
      method: value.split(" ")[0].split(".")[1],
      endpoint:value.split(" ")[1],
      request:key.charAt(0).toUpperCase()
        + key.slice(1),
      response:key.charAt(0).toUpperCase()
        + key.slice(1)+"Response"
    }
  }
  console.log(temp)
}

generate()