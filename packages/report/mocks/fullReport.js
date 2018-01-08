import { JSDOM } from 'jsdom';

const fullReport = `
  <html>
    <div id="report-page">
      <section class="sc-ksYbfQ ilcIct"><h2 style="margin: 0px; padding: 0px;"><span style="font-family: Roboto, sans-serif; font-size: 1.25rem; font-weight: 700; color: rgb(89, 98, 106);">Top Posts</span></h2><span style="font-family: Roboto, sans-serif; font-size: 1rem; font-weight: 700; color: rgb(89, 98, 106);"><span class="sc-hmzhuo dJHYhF">Showing for accounts</span><span class="sc-frDJqD hAwsIk"> buffer</span></span><aside class="_3TN_8lQLrtyDm-vfWvXI_E"><header><ul class="_2i0ugzdckysxMFkwlwt93y"><li class="_3ddKJz58NjomKuSv4rTU2m"><span style="font-family: Roboto, sans-serif; font-size: 0.5rem; font-weight: 400; color: rgb(89, 98, 106);">Posts and Stories</span></li><li class="dyqfB7wI52x2Q7JRwpWjY"><span style="font-family: Roboto, sans-serif; font-size: 0.5rem; font-weight: 400; color: rgb(89, 98, 106);">Engagements</span></li><li class="dyqfB7wI52x2Q7JRwpWjY"><span style="font-family: Roboto, sans-serif; font-size: 0.5rem; font-weight: 400; color: rgb(89, 98, 106);">Audience</span></li></ul></header><ul class="_1kA0IsBxsDEfuaIDcpEAhP"><li class="_2bWv2igB5fmuLAjVrbphBd"><div class="_3ddKJz58NjomKuSv4rTU2m"><div class="_2vXMUUhtaGlJ-sK1JZdozD"><div class="_1u_W_HNIkgqpbSCDcQ8Wrd"><a href="https://twitter.com/buffer/status/949687665846349824" target="_blank" rel="noopener noreferrer" class="_1-qQG3kbb5FsNsoBCuAOWX"><span style="font-family: Roboto, sans-serif; font-size: 0.75rem; font-weight: 400; color: rgb(89, 98, 106);">6 January 09:02 am</span></a></div><div class="draWzeAowHvWeUsvrUFkN"><a class="_2CKa2_k0ER1ZcWAnA4sLiL" href="https://twitter.com/buffer/status/949687665846349824" rel="noopener noreferrer" target="_blank"><i class="bi-click"></i>VIEW POST</a></div></div><div class="v9vVNutj0Ox2CmVwcNPk9"><img alt="" class="_2Iabu_OXo0GRTBqEA7pb9k" src="https://buffer-media-uploads.s3.amazonaws.com/56c20bd3bd3816f63c94c73f/5a4d5d6f1add006824fb172d/output/thumbnail_00001.png"><div class="ZtQfhvw9JrWWR_5Qa435B">5 science-backed ways for a happier and more productive 2018. Here's what to do the very first week! 🚀</div></div></div><div class="dyqfB7wI52x2Q7JRwpWjY"><div><div class="_2TDT-Zy_y1mPevH5OZMhTF"><span class="_2TfLWaII5umVAgsWIIlzUm"><span style="font-family: Roboto, sans-serif; font-size: 0.75rem; font-weight: 700; color: rgb(89, 98, 106);"><span>0</span></span><span style="font-family: Roboto, sans-serif; font-size: 0.75rem; font-weight: 400; color: rgb(89, 98, 106);"> clicks</span></span><span data-tip="Clicks" class="_4b6RTVkkgf9n4aTocZMpa" style="background-color: rgb(152, 232, 178); width: 0%;"></span></div></div><div><div class="_2TDT-Zy_y1mPevH5OZMhTF"><span class="_2TfLWaII5umVAgsWIIlzUm"><span style="font-family: Roboto, sans-serif; font-size: 0.75rem; font-weight: 700; color: rgb(89, 98, 106);"><span>13</span></span><span style="font-family: Roboto, sans-serif; font-size: 0.75rem; font-weight: 400; color: rgb(89, 98, 106);"> retweets</span></span><span data-tip="Retweets" class="_4b6RTVkkgf9n4aTocZMpa" style="background-color: rgb(253, 143, 144); width: 9.84848%;"></span></div></div><div><div class="_2TDT-Zy_y1mPevH5OZMhTF"><span class="_2TfLWaII5umVAgsWIIlzUm"><span style="font-family: Roboto, sans-serif; font-size: 0.75rem; font-weight: 700; color: rgb(89, 98, 106);"><span>41</span></span><span style="font-family: Roboto, sans-serif; font-size: 0.75rem; font-weight: 400; color: rgb(89, 98, 106);"> likes</span></span><span data-tip="Likes" class="_4b6RTVkkgf9n4aTocZMpa" style="background-color: rgb(143, 198, 219); width: 31.0606%;"></span></div></div></div><div class="dyqfB7wI52x2Q7JRwpWjY"><div><div class="_2TDT-Zy_y1mPevH5OZMhTF"><span class="_2TfLWaII5umVAgsWIIlzUm"><span style="font-family: Roboto, sans-serif; font-size: 0.75rem; font-weight: 700; color: rgb(89, 98, 106);"><span>46.3k</span></span><span style="font-family: Roboto, sans-serif; font-size: 0.75rem; font-weight: 400; color: rgb(89, 98, 106);"> impressions</span></span><span data-tip="Impressions" class="_4b6RTVkkgf9n4aTocZMpa" style="background-color: rgb(254, 199, 139); width: 100%;"></span></div></div></div></li><li class="_2bWv2igB5fmuLAjVrbphBd"><div class="_3ddKJz58NjomKuSv4rTU2m"><div class="_2vXMUUhtaGlJ-sK1JZdozD"><div class="_1u_W_HNIkgqpbSCDcQ8Wrd"><a href="https://twitter.com/buffer/status/948601610070044677" target="_blank" rel="noopener noreferrer" class="_1-qQG3kbb5FsNsoBCuAOWX"><span style="font-family: Roboto, sans-serif; font-size: 0.75rem; font-weight: 400; color: rgb(89, 98, 106);">3 January 09:07 am</span></a></div><div class="draWzeAowHvWeUsvrUFkN"><a class="_2CKa2_k0ER1ZcWAnA4sLiL" href="https://twitter.com/buffer/status/948601610070044677" rel="noopener noreferrer" target="_blank"><i class="bi-click"></i>VIEW POST</a></div></div><div class="v9vVNutj0Ox2CmVwcNPk9"><img alt="" class="_2Iabu_OXo0GRTBqEA7pb9k" src="https://buffer-media-uploads.s3.amazonaws.com/5a4c2912e2421bc673dd49f4/7e93585ce61c0c34a06234ed28ab7a908ca2aa5e_2127264b381e6b5d2b382b69b685ae53d73d9785_thumbnail"><div class="ZtQfhvw9JrWWR_5Qa435B">Q1: What are some of your personal or professional goals for 2018? <a href="https://twitter.com/#!/search?q=%23bufferchat" title="#bufferchat" class="hashtag" rel="external nofollow" target="_blank">#bufferchat</a></div></div></div><div class="dyqfB7wI52x2Q7JRwpWjY"><div><div class="_2TDT-Zy_y1mPevH5OZMhTF"><span class="_2TfLWaII5umVAgsWIIlzUm"><span style="font-family: Roboto, sans-serif; font-size: 0.75rem; font-weight: 700; color: rgb(89, 98, 106);"><span>7</span></span><span style="font-family: Roboto, sans-serif; font-size: 0.75rem; font-weight: 400; color: rgb(89, 98, 106);"> clicks</span></span><span data-tip="Clicks" class="_4b6RTVkkgf9n4aTocZMpa" style="background-color: rgb(152, 232, 178); width: 5.30303%;"></span></div></div><div><div class="_2TDT-Zy_y1mPevH5OZMhTF"><span class="_2TfLWaII5umVAgsWIIlzUm"><span style="font-family: Roboto, sans-serif; font-size: 0.75rem; font-weight: 700; color: rgb(89, 98, 106);"><span>1</span></span><span style="font-family: Roboto, sans-serif; font-size: 0.75rem; font-weight: 400; color: rgb(89, 98, 106);"> retweets</span></span><span data-tip="Retweets" class="_4b6RTVkkgf9n4aTocZMpa" style="background-color: rgb(253, 143, 144); width: 0.757576%;"></span></div></div><div><div class="_2TDT-Zy_y1mPevH5OZMhTF"><span class="_2TfLWaII5umVAgsWIIlzUm"><span style="font-family: Roboto, sans-serif; font-size: 0.75rem; font-weight: 700; color: rgb(89, 98, 106);"><span>16</span></span><span style="font-family: Roboto, sans-serif; font-size: 0.75rem; font-weight: 400; color: rgb(89, 98, 106);"> likes</span></span><span data-tip="Likes" class="_4b6RTVkkgf9n4aTocZMpa" style="background-color: rgb(143, 198, 219); width: 12.1212%;"></span></div></div></div><div class="dyqfB7wI52x2Q7JRwpWjY"><div><div class="_2TDT-Zy_y1mPevH5OZMhTF"><span class="_2TfLWaII5umVAgsWIIlzUm"><span style="font-family: Roboto, sans-serif; font-size: 0.75rem; font-weight: 700; color: rgb(89, 98, 106);"><span>37.6k</span></span><span style="font-family: Roboto, sans-serif; font-size: 0.75rem; font-weight: 400; color: rgb(89, 98, 106);"> impressions</span></span><span data-tip="Impressions" class="_4b6RTVkkgf9n4aTocZMpa" style="background-color: rgb(254, 199, 139); width: 81.2754%;"></span></div></div></div></li><li class="_2bWv2igB5fmuLAjVrbphBd"><div class="_3ddKJz58NjomKuSv4rTU2m"><div class="_2vXMUUhtaGlJ-sK1JZdozD"><div class="_1u_W_HNIkgqpbSCDcQ8Wrd"><a href="https://twitter.com/buffer/status/948603880170049536" target="_blank" rel="noopener noreferrer" class="_1-qQG3kbb5FsNsoBCuAOWX"><span style="font-family: Roboto, sans-serif; font-size: 0.75rem; font-weight: 400; color: rgb(89, 98, 106);">3 January 09:16 am</span></a></div><div class="draWzeAowHvWeUsvrUFkN"><a class="_2CKa2_k0ER1ZcWAnA4sLiL" href="https://twitter.com/buffer/status/948603880170049536" rel="noopener noreferrer" target="_blank"><i class="bi-click"></i>VIEW POST</a></div></div><div class="v9vVNutj0Ox2CmVwcNPk9"><img alt="" class="_2Iabu_OXo0GRTBqEA7pb9k" src="https://buffer-media-uploads.s3.amazonaws.com/5a4c2949e2421bc974dd49f3/738a95463c61ee618d128f902fe2b245f50c7731_779b0826603029a663b62c861afa13ad85ee8d19_thumbnail"><div class="ZtQfhvw9JrWWR_5Qa435B">Q2: What’s your strategy for setting goals? Beginning of the year? As you go? <a href="https://twitter.com/#!/search?q=%23bufferchat" title="#bufferchat" class="hashtag" rel="external nofollow" target="_blank">#bufferchat</a></div></div></div><div class="dyqfB7wI52x2Q7JRwpWjY"><div><div class="_2TDT-Zy_y1mPevH5OZMhTF"><span class="_2TfLWaII5umVAgsWIIlzUm"><span style="font-family: Roboto, sans-serif; font-size: 0.75rem; font-weight: 700; color: rgb(89, 98, 106);"><span>2</span></span><span style="font-family: Roboto, sans-serif; font-size: 0.75rem; font-weight: 400; color: rgb(89, 98, 106);"> clicks</span></span><span data-tip="Clicks" class="_4b6RTVkkgf9n4aTocZMpa" style="background-color: rgb(152, 232, 178); width: 1.51515%;"></span></div></div><div><div class="_2TDT-Zy_y1mPevH5OZMhTF"><span class="_2TfLWaII5umVAgsWIIlzUm"><span style="font-family: Roboto, sans-serif; font-size: 0.75rem; font-weight: 700; color: rgb(89, 98, 106);"><span>4</span></span><span style="font-family: Roboto, sans-serif; font-size: 0.75rem; font-weight: 400; color: rgb(89, 98, 106);"> retweets</span></span><span data-tip="Retweets" class="_4b6RTVkkgf9n4aTocZMpa" style="background-color: rgb(253, 143, 144); width: 3.0303%;"></span></div></div><div><div class="_2TDT-Zy_y1mPevH5OZMhTF"><span class="_2TfLWaII5umVAgsWIIlzUm"><span style="font-family: Roboto, sans-serif; font-size: 0.75rem; font-weight: 700; color: rgb(89, 98, 106);"><span>25</span></span><span style="font-family: Roboto, sans-serif; font-size: 0.75rem; font-weight: 400; color: rgb(89, 98, 106);"> likes</span></span><span data-tip="Likes" class="_4b6RTVkkgf9n4aTocZMpa" style="background-color: rgb(143, 198, 219); width: 18.9394%;"></span></div></div></div><div class="dyqfB7wI52x2Q7JRwpWjY"><div><div class="_2TDT-Zy_y1mPevH5OZMhTF"><span class="_2TfLWaII5umVAgsWIIlzUm"><span style="font-family: Roboto, sans-serif; font-size: 0.75rem; font-weight: 700; color: rgb(89, 98, 106);"><span>36.1k</span></span><span style="font-family: Roboto, sans-serif; font-size: 0.75rem; font-weight: 400; color: rgb(89, 98, 106);"> impressions</span></span><span data-tip="Impressions" class="_4b6RTVkkgf9n4aTocZMpa" style="background-color: rgb(254, 199, 139); width: 78.0362%;"></span></div></div></div></li><li class="_2bWv2igB5fmuLAjVrbphBd"><div class="_3ddKJz58NjomKuSv4rTU2m"><div class="_2vXMUUhtaGlJ-sK1JZdozD"><div class="_1u_W_HNIkgqpbSCDcQ8Wrd"><a href="https://twitter.com/buffer/status/948907023223181313" target="_blank" rel="noopener noreferrer" class="_1-qQG3kbb5FsNsoBCuAOWX"><span style="font-family: Roboto, sans-serif; font-size: 0.75rem; font-weight: 400; color: rgb(89, 98, 106);">4 January 05:20 am</span></a></div><div class="draWzeAowHvWeUsvrUFkN"><a class="_2CKa2_k0ER1ZcWAnA4sLiL" href="https://twitter.com/buffer/status/948907023223181313" rel="noopener noreferrer" target="_blank"><i class="bi-click"></i>VIEW POST</a></div></div><div class="v9vVNutj0Ox2CmVwcNPk9"><img alt="" class="_2Iabu_OXo0GRTBqEA7pb9k" src="https://buffer-media-uploads.s3.amazonaws.com/56c20bd3bd3816f63c94c73f/5a4d5ce5bae62a7352fb172a/output/thumbnail_00001.png"><div class="ZtQfhvw9JrWWR_5Qa435B">Looking to make 2018 your best year yet? <br>
<br>
5 science-backed ways to live this year to the fullest ✨</div></div></div><div class="dyqfB7wI52x2Q7JRwpWjY"><div><div class="_2TDT-Zy_y1mPevH5OZMhTF"><span class="_2TfLWaII5umVAgsWIIlzUm"><span style="font-family: Roboto, sans-serif; font-size: 0.75rem; font-weight: 700; color: rgb(89, 98, 106);"><span>1</span></span><span style="font-family: Roboto, sans-serif; font-size: 0.75rem; font-weight: 400; color: rgb(89, 98, 106);"> clicks</span></span><span data-tip="Clicks" class="_4b6RTVkkgf9n4aTocZMpa" style="background-color: rgb(152, 232, 178); width: 0.757576%;"></span></div></div><div><div class="_2TDT-Zy_y1mPevH5OZMhTF"><span class="_2TfLWaII5umVAgsWIIlzUm"><span style="font-family: Roboto, sans-serif; font-size: 0.75rem; font-weight: 700; color: rgb(89, 98, 106);"><span>37</span></span><span style="font-family: Roboto, sans-serif; font-size: 0.75rem; font-weight: 400; color: rgb(89, 98, 106);"> retweets</span></span><span data-tip="Retweets" class="_4b6RTVkkgf9n4aTocZMpa" style="background-color: rgb(253, 143, 144); width: 28.0303%;"></span></div></div><div><div class="_2TDT-Zy_y1mPevH5OZMhTF"><span class="_2TfLWaII5umVAgsWIIlzUm"><span style="font-family: Roboto, sans-serif; font-size: 0.75rem; font-weight: 700; color: rgb(89, 98, 106);"><span>83</span></span><span style="font-family: Roboto, sans-serif; font-size: 0.75rem; font-weight: 400; color: rgb(89, 98, 106);"> likes</span></span><span data-tip="Likes" class="_4b6RTVkkgf9n4aTocZMpa" style="background-color: rgb(143, 198, 219); width: 62.8788%;"></span></div></div></div><div class="dyqfB7wI52x2Q7JRwpWjY"><div><div class="_2TDT-Zy_y1mPevH5OZMhTF"><span class="_2TfLWaII5umVAgsWIIlzUm"><span style="font-family: Roboto, sans-serif; font-size: 0.75rem; font-weight: 700; color: rgb(89, 98, 106);"><span>34.6k</span></span><span style="font-family: Roboto, sans-serif; font-size: 0.75rem; font-weight: 400; color: rgb(89, 98, 106);"> impressions</span></span><span data-tip="Impressions" class="_4b6RTVkkgf9n4aTocZMpa" style="background-color: rgb(254, 199, 139); width: 74.7128%;"></span></div></div></div></li><li class="_2bWv2igB5fmuLAjVrbphBd"><div class="_3ddKJz58NjomKuSv4rTU2m"><div class="_2vXMUUhtaGlJ-sK1JZdozD"><div class="_1u_W_HNIkgqpbSCDcQ8Wrd"><a href="https://twitter.com/buffer/status/948610168140509185" target="_blank" rel="noopener noreferrer" class="_1-qQG3kbb5FsNsoBCuAOWX"><span style="font-family: Roboto, sans-serif; font-size: 0.75rem; font-weight: 400; color: rgb(89, 98, 106);">3 January 09:41 am</span></a></div><div class="draWzeAowHvWeUsvrUFkN"><a class="_2CKa2_k0ER1ZcWAnA4sLiL" href="https://twitter.com/buffer/status/948610168140509185" rel="noopener noreferrer" target="_blank"><i class="bi-click"></i>VIEW POST</a></div></div><div class="v9vVNutj0Ox2CmVwcNPk9"><img alt="" class="_2Iabu_OXo0GRTBqEA7pb9k" src="https://buffer-media-uploads.s3.amazonaws.com/5a4c29d109df6a430fdd49f2/21898e0dde2c7db3c4f8b4a3259366e3cc7e1298_cd5c0c8b5eb405f91319fda95f55c6aa3939f055_thumbnail"><div class="ZtQfhvw9JrWWR_5Qa435B">Q5: Do you tend to set huge goals or ones that you know are attainable? What makes them attainable?&nbsp;&nbsp;<a href="https://twitter.com/#!/search?q=%23bufferchat" title="#bufferchat" class="hashtag" rel="external nofollow" target="_blank">#bufferchat</a></div></div></div><div class="dyqfB7wI52x2Q7JRwpWjY"><div><div class="_2TDT-Zy_y1mPevH5OZMhTF"><span class="_2TfLWaII5umVAgsWIIlzUm"><span style="font-family: Roboto, sans-serif; font-size: 0.75rem; font-weight: 700; color: rgb(89, 98, 106);"><span>5</span></span><span style="font-family: Roboto, sans-serif; font-size: 0.75rem; font-weight: 400; color: rgb(89, 98, 106);"> clicks</span></span><span data-tip="Clicks" class="_4b6RTVkkgf9n4aTocZMpa" style="background-color: rgb(152, 232, 178); width: 3.78788%;"></span></div></div><div><div class="_2TDT-Zy_y1mPevH5OZMhTF"><span class="_2TfLWaII5umVAgsWIIlzUm"><span style="font-family: Roboto, sans-serif; font-size: 0.75rem; font-weight: 700; color: rgb(89, 98, 106);"><span>1</span></span><span style="font-family: Roboto, sans-serif; font-size: 0.75rem; font-weight: 400; color: rgb(89, 98, 106);"> retweets</span></span><span data-tip="Retweets" class="_4b6RTVkkgf9n4aTocZMpa" style="background-color: rgb(253, 143, 144); width: 0.757576%;"></span></div></div><div><div class="_2TDT-Zy_y1mPevH5OZMhTF"><span class="_2TfLWaII5umVAgsWIIlzUm"><span style="font-family: Roboto, sans-serif; font-size: 0.75rem; font-weight: 700; color: rgb(89, 98, 106);"><span>15</span></span><span style="font-family: Roboto, sans-serif; font-size: 0.75rem; font-weight: 400; color: rgb(89, 98, 106);"> likes</span></span><span data-tip="Likes" class="_4b6RTVkkgf9n4aTocZMpa" style="background-color: rgb(143, 198, 219); width: 11.3636%;"></span></div></div></div><div class="dyqfB7wI52x2Q7JRwpWjY"><div><div class="_2TDT-Zy_y1mPevH5OZMhTF"><span class="_2TfLWaII5umVAgsWIIlzUm"><span style="font-family: Roboto, sans-serif; font-size: 0.75rem; font-weight: 700; color: rgb(89, 98, 106);"><span>32.3k</span></span><span style="font-family: Roboto, sans-serif; font-size: 0.75rem; font-weight: 400; color: rgb(89, 98, 106);"> impressions</span></span><span data-tip="Impressions" class="_4b6RTVkkgf9n4aTocZMpa" style="background-color: rgb(254, 199, 139); width: 69.6877%;"></span></div></div></div></li><li class="_2bWv2igB5fmuLAjVrbphBd" style="break-before: page; border-top: 1px solid rgb(206, 215, 223); margin-top: 2.8rem;"><div class="_3ddKJz58NjomKuSv4rTU2m"><div class="_2vXMUUhtaGlJ-sK1JZdozD"><div class="_1u_W_HNIkgqpbSCDcQ8Wrd"><a href="https://twitter.com/buffer/status/948766698185936901" target="_blank" rel="noopener noreferrer" class="_1-qQG3kbb5FsNsoBCuAOWX"><span style="font-family: Roboto, sans-serif; font-size: 0.75rem; font-weight: 400; color: rgb(89, 98, 106);">3 January 08:03 pm</span></a></div><div class="draWzeAowHvWeUsvrUFkN"><a class="_2CKa2_k0ER1ZcWAnA4sLiL" href="https://twitter.com/buffer/status/948766698185936901" rel="noopener noreferrer" target="_blank"><i class="bi-click"></i>VIEW POST</a></div></div><div class="v9vVNutj0Ox2CmVwcNPk9"><img alt="" class="_2Iabu_OXo0GRTBqEA7pb9k" src="https://buffer-pictures.s3.amazonaws.com/ebab6ef214348133f8170b786defccac.8110dd474e8e67ab1a14071fc5eda884.100x100"><div class="ZtQfhvw9JrWWR_5Qa435B">We tested more than 50 online music libraries 🎶 13 fantastic places to find background music for your video content: <a class="url" href="https://buff.ly/2lHxyEM" rel="external nofollow" target="_blank">https://buff.ly/2lHxyEM</a> <a class="url" href="https://buff.ly/2lHR9oq" rel="external nofollow" target="_blank">https://buff.ly/2lHR9oq</a></div></div></div><div class="dyqfB7wI52x2Q7JRwpWjY"><div><div class="_2TDT-Zy_y1mPevH5OZMhTF"><span class="_2TfLWaII5umVAgsWIIlzUm"><span style="font-family: Roboto, sans-serif; font-size: 0.75rem; font-weight: 700; color: rgb(89, 98, 106);"><span>132</span></span><span style="font-family: Roboto, sans-serif; font-size: 0.75rem; font-weight: 400; color: rgb(89, 98, 106);"> clicks</span></span><span data-tip="Clicks" class="_4b6RTVkkgf9n4aTocZMpa" style="background-color: rgb(152, 232, 178); width: 100%;"></span></div></div><div><div class="_2TDT-Zy_y1mPevH5OZMhTF"><span class="_2TfLWaII5umVAgsWIIlzUm"><span style="font-family: Roboto, sans-serif; font-size: 0.75rem; font-weight: 700; color: rgb(89, 98, 106);"><span>26</span></span><span style="font-family: Roboto, sans-serif; font-size: 0.75rem; font-weight: 400; color: rgb(89, 98, 106);"> retweets</span></span><span data-tip="Retweets" class="_4b6RTVkkgf9n4aTocZMpa" style="background-color: rgb(253, 143, 144); width: 19.697%;"></span></div></div><div><div class="_2TDT-Zy_y1mPevH5OZMhTF"><span class="_2TfLWaII5umVAgsWIIlzUm"><span style="font-family: Roboto, sans-serif; font-size: 0.75rem; font-weight: 700; color: rgb(89, 98, 106);"><span>95</span></span><span style="font-family: Roboto, sans-serif; font-size: 0.75rem; font-weight: 400; color: rgb(89, 98, 106);"> likes</span></span><span data-tip="Likes" class="_4b6RTVkkgf9n4aTocZMpa" style="background-color: rgb(143, 198, 219); width: 71.9697%;"></span></div></div></div><div class="dyqfB7wI52x2Q7JRwpWjY"><div><div class="_2TDT-Zy_y1mPevH5OZMhTF"><span class="_2TfLWaII5umVAgsWIIlzUm"><span style="font-family: Roboto, sans-serif; font-size: 0.75rem; font-weight: 700; color: rgb(89, 98, 106);"><span>32.3k</span></span><span style="font-family: Roboto, sans-serif; font-size: 0.75rem; font-weight: 400; color: rgb(89, 98, 106);"> impressions</span></span><span data-tip="Impressions" class="_4b6RTVkkgf9n4aTocZMpa" style="background-color: rgb(254, 199, 139); width: 69.6532%;"></span></div></div></div></li><li class="_2bWv2igB5fmuLAjVrbphBd"><div class="_3ddKJz58NjomKuSv4rTU2m"><div class="_2vXMUUhtaGlJ-sK1JZdozD"><div class="_1u_W_HNIkgqpbSCDcQ8Wrd"><a href="https://twitter.com/buffer/status/948606156649517057" target="_blank" rel="noopener noreferrer" class="_1-qQG3kbb5FsNsoBCuAOWX"><span style="font-family: Roboto, sans-serif; font-size: 0.75rem; font-weight: 400; color: rgb(89, 98, 106);">3 January 09:25 am</span></a></div><div class="draWzeAowHvWeUsvrUFkN"><a class="_2CKa2_k0ER1ZcWAnA4sLiL" href="https://twitter.com/buffer/status/948606156649517057" rel="noopener noreferrer" target="_blank"><i class="bi-click"></i>VIEW POST</a></div></div><div class="v9vVNutj0Ox2CmVwcNPk9"><img alt="" class="_2Iabu_OXo0GRTBqEA7pb9k" src="https://buffer-media-uploads.s3.amazonaws.com/5a4c2971708367d4601665bf/edf46ae110160fa0fd8d32635d6a2acba3f0e9f9_0d16686efcb4ff8c0cd1c58f93d2d830a6711c89_thumbnail"><div class="ZtQfhvw9JrWWR_5Qa435B">Q3: Do you use any tools to track your goals? <a href="https://twitter.com/#!/search?q=%23bufferchat" title="#bufferchat" class="hashtag" rel="external nofollow" target="_blank">#bufferchat</a></div></div></div><div class="dyqfB7wI52x2Q7JRwpWjY"><div><div class="_2TDT-Zy_y1mPevH5OZMhTF"><span class="_2TfLWaII5umVAgsWIIlzUm"><span style="font-family: Roboto, sans-serif; font-size: 0.75rem; font-weight: 700; color: rgb(89, 98, 106);"><span>6</span></span><span style="font-family: Roboto, sans-serif; font-size: 0.75rem; font-weight: 400; color: rgb(89, 98, 106);"> clicks</span></span><span data-tip="Clicks" class="_4b6RTVkkgf9n4aTocZMpa" style="background-color: rgb(152, 232, 178); width: 4.54545%;"></span></div></div><div><div class="_2TDT-Zy_y1mPevH5OZMhTF"><span class="_2TfLWaII5umVAgsWIIlzUm"><span style="font-family: Roboto, sans-serif; font-size: 0.75rem; font-weight: 700; color: rgb(89, 98, 106);"><span>4</span></span><span style="font-family: Roboto, sans-serif; font-size: 0.75rem; font-weight: 400; color: rgb(89, 98, 106);"> retweets</span></span><span data-tip="Retweets" class="_4b6RTVkkgf9n4aTocZMpa" style="background-color: rgb(253, 143, 144); width: 3.0303%;"></span></div></div><div><div class="_2TDT-Zy_y1mPevH5OZMhTF"><span class="_2TfLWaII5umVAgsWIIlzUm"><span style="font-family: Roboto, sans-serif; font-size: 0.75rem; font-weight: 700; color: rgb(89, 98, 106);"><span>17</span></span><span style="font-family: Roboto, sans-serif; font-size: 0.75rem; font-weight: 400; color: rgb(89, 98, 106);"> likes</span></span><span data-tip="Likes" class="_4b6RTVkkgf9n4aTocZMpa" style="background-color: rgb(143, 198, 219); width: 12.8788%;"></span></div></div></div><div class="dyqfB7wI52x2Q7JRwpWjY"><div><div class="_2TDT-Zy_y1mPevH5OZMhTF"><span class="_2TfLWaII5umVAgsWIIlzUm"><span style="font-family: Roboto, sans-serif; font-size: 0.75rem; font-weight: 700; color: rgb(89, 98, 106);"><span>32.0k</span></span><span style="font-family: Roboto, sans-serif; font-size: 0.75rem; font-weight: 400; color: rgb(89, 98, 106);"> impressions</span></span><span data-tip="Impressions" class="_4b6RTVkkgf9n4aTocZMpa" style="background-color: rgb(254, 199, 139); width: 69.1133%;"></span></div></div></div></li><li class="_2bWv2igB5fmuLAjVrbphBd"><div class="_3ddKJz58NjomKuSv4rTU2m"><div class="_2vXMUUhtaGlJ-sK1JZdozD"><div class="_1u_W_HNIkgqpbSCDcQ8Wrd"><a href="https://twitter.com/buffer/status/948600300620926976" target="_blank" rel="noopener noreferrer" class="_1-qQG3kbb5FsNsoBCuAOWX"><span style="font-family: Roboto, sans-serif; font-size: 0.75rem; font-weight: 400; color: rgb(89, 98, 106);">3 January 09:01 am</span></a></div><div class="draWzeAowHvWeUsvrUFkN"><a class="_2CKa2_k0ER1ZcWAnA4sLiL" href="https://twitter.com/buffer/status/948600300620926976" rel="noopener noreferrer" target="_blank"><i class="bi-click"></i>VIEW POST</a></div></div><div class="v9vVNutj0Ox2CmVwcNPk9"><img alt="" class="_2Iabu_OXo0GRTBqEA7pb9k" src="https://buffer-media-uploads.s3.amazonaws.com/5a4c28b709df6a6104dd49fb/096ab5450b1fbcaf9bc1bd4dfad135ae19716728_ed2f8e711f102fb03652f6b7bb3ecef5b92f4101_thumbnail"><div class="ZtQfhvw9JrWWR_5Qa435B">Let’s kick off <a href="https://twitter.com/#!/search?q=%23bufferchat" title="#bufferchat" class="hashtag" rel="external nofollow" target="_blank">#bufferchat</a> with an icebreaker! Where are you tweeting from &amp; if you could check off one bucket list item this year, what would it be?&nbsp;&nbsp;😊</div></div></div><div class="dyqfB7wI52x2Q7JRwpWjY"><div><div class="_2TDT-Zy_y1mPevH5OZMhTF"><span class="_2TfLWaII5umVAgsWIIlzUm"><span style="font-family: Roboto, sans-serif; font-size: 0.75rem; font-weight: 700; color: rgb(89, 98, 106);"><span>3</span></span><span style="font-family: Roboto, sans-serif; font-size: 0.75rem; font-weight: 400; color: rgb(89, 98, 106);"> clicks</span></span><span data-tip="Clicks" class="_4b6RTVkkgf9n4aTocZMpa" style="background-color: rgb(152, 232, 178); width: 2.27273%;"></span></div></div><div><div class="_2TDT-Zy_y1mPevH5OZMhTF"><span class="_2TfLWaII5umVAgsWIIlzUm"><span style="font-family: Roboto, sans-serif; font-size: 0.75rem; font-weight: 700; color: rgb(89, 98, 106);"><span>2</span></span><span style="font-family: Roboto, sans-serif; font-size: 0.75rem; font-weight: 400; color: rgb(89, 98, 106);"> retweets</span></span><span data-tip="Retweets" class="_4b6RTVkkgf9n4aTocZMpa" style="background-color: rgb(253, 143, 144); width: 1.51515%;"></span></div></div><div><div class="_2TDT-Zy_y1mPevH5OZMhTF"><span class="_2TfLWaII5umVAgsWIIlzUm"><span style="font-family: Roboto, sans-serif; font-size: 0.75rem; font-weight: 700; color: rgb(89, 98, 106);"><span>23</span></span><span style="font-family: Roboto, sans-serif; font-size: 0.75rem; font-weight: 400; color: rgb(89, 98, 106);"> likes</span></span><span data-tip="Likes" class="_4b6RTVkkgf9n4aTocZMpa" style="background-color: rgb(143, 198, 219); width: 17.4242%;"></span></div></div></div><div class="dyqfB7wI52x2Q7JRwpWjY"><div><div class="_2TDT-Zy_y1mPevH5OZMhTF"><span class="_2TfLWaII5umVAgsWIIlzUm"><span style="font-family: Roboto, sans-serif; font-size: 0.75rem; font-weight: 700; color: rgb(89, 98, 106);"><span>31.8k</span></span><span style="font-family: Roboto, sans-serif; font-size: 0.75rem; font-weight: 400; color: rgb(89, 98, 106);"> impressions</span></span><span data-tip="Impressions" class="_4b6RTVkkgf9n4aTocZMpa" style="background-color: rgb(254, 199, 139); width: 68.6253%;"></span></div></div></div></li><li class="_2bWv2igB5fmuLAjVrbphBd"><div class="_3ddKJz58NjomKuSv4rTU2m"><div class="_2vXMUUhtaGlJ-sK1JZdozD"><div class="_1u_W_HNIkgqpbSCDcQ8Wrd"><a href="https://twitter.com/buffer/status/948608153670823936" target="_blank" rel="noopener noreferrer" class="_1-qQG3kbb5FsNsoBCuAOWX"><span style="font-family: Roboto, sans-serif; font-size: 0.75rem; font-weight: 400; color: rgb(89, 98, 106);">3 January 09:33 am</span></a></div><div class="draWzeAowHvWeUsvrUFkN"><a class="_2CKa2_k0ER1ZcWAnA4sLiL" href="https://twitter.com/buffer/status/948608153670823936" rel="noopener noreferrer" target="_blank"><i class="bi-click"></i>VIEW POST</a></div></div><div class="v9vVNutj0Ox2CmVwcNPk9"><img alt="" class="_2Iabu_OXo0GRTBqEA7pb9k" src="https://buffer-media-uploads.s3.amazonaws.com/5a4c299ce2421b8177dd49f3/68fdda34aa763793be7a0930900aa6eed0fd4f50_39d48ea1a524ac90503ca003bf64f911a8642412_thumbnail"><div class="ZtQfhvw9JrWWR_5Qa435B">Q4: How often do you check in on your goals? <a href="https://twitter.com/#!/search?q=%23bufferchat" title="#bufferchat" class="hashtag" rel="external nofollow" target="_blank">#bufferchat</a></div></div></div><div class="dyqfB7wI52x2Q7JRwpWjY"><div><div class="_2TDT-Zy_y1mPevH5OZMhTF"><span class="_2TfLWaII5umVAgsWIIlzUm"><span style="font-family: Roboto, sans-serif; font-size: 0.75rem; font-weight: 700; color: rgb(89, 98, 106);"><span>2</span></span><span style="font-family: Roboto, sans-serif; font-size: 0.75rem; font-weight: 400; color: rgb(89, 98, 106);"> clicks</span></span><span data-tip="Clicks" class="_4b6RTVkkgf9n4aTocZMpa" style="background-color: rgb(152, 232, 178); width: 1.51515%;"></span></div></div><div><div class="_2TDT-Zy_y1mPevH5OZMhTF"><span class="_2TfLWaII5umVAgsWIIlzUm"><span style="font-family: Roboto, sans-serif; font-size: 0.75rem; font-weight: 700; color: rgb(89, 98, 106);"><span>6</span></span><span style="font-family: Roboto, sans-serif; font-size: 0.75rem; font-weight: 400; color: rgb(89, 98, 106);"> retweets</span></span><span data-tip="Retweets" class="_4b6RTVkkgf9n4aTocZMpa" style="background-color: rgb(253, 143, 144); width: 4.54545%;"></span></div></div><div><div class="_2TDT-Zy_y1mPevH5OZMhTF"><span class="_2TfLWaII5umVAgsWIIlzUm"><span style="font-family: Roboto, sans-serif; font-size: 0.75rem; font-weight: 700; color: rgb(89, 98, 106);"><span>20</span></span><span style="font-family: Roboto, sans-serif; font-size: 0.75rem; font-weight: 400; color: rgb(89, 98, 106);"> likes</span></span><span data-tip="Likes" class="_4b6RTVkkgf9n4aTocZMpa" style="background-color: rgb(143, 198, 219); width: 15.1515%;"></span></div></div></div><div class="dyqfB7wI52x2Q7JRwpWjY"><div><div class="_2TDT-Zy_y1mPevH5OZMhTF"><span class="_2TfLWaII5umVAgsWIIlzUm"><span style="font-family: Roboto, sans-serif; font-size: 0.75rem; font-weight: 700; color: rgb(89, 98, 106);"><span>30.9k</span></span><span style="font-family: Roboto, sans-serif; font-size: 0.75rem; font-weight: 400; color: rgb(89, 98, 106);"> impressions</span></span><span data-tip="Impressions" class="_4b6RTVkkgf9n4aTocZMpa" style="background-color: rgb(254, 199, 139); width: 66.8157%;"></span></div></div></div></li><li class="_2bWv2igB5fmuLAjVrbphBd"><div class="_3ddKJz58NjomKuSv4rTU2m"><div class="_2vXMUUhtaGlJ-sK1JZdozD"><div class="_1u_W_HNIkgqpbSCDcQ8Wrd"><a href="https://twitter.com/buffer/status/949269368634044421" target="_blank" rel="noopener noreferrer" class="_1-qQG3kbb5FsNsoBCuAOWX"><span style="font-family: Roboto, sans-serif; font-size: 0.75rem; font-weight: 400; color: rgb(89, 98, 106);">5 January 05:20 am</span></a></div><div class="draWzeAowHvWeUsvrUFkN"><a class="_2CKa2_k0ER1ZcWAnA4sLiL" href="https://twitter.com/buffer/status/949269368634044421" rel="noopener noreferrer" target="_blank"><i class="bi-click"></i>VIEW POST</a></div></div><div class="v9vVNutj0Ox2CmVwcNPk9"><img alt="" class="_2Iabu_OXo0GRTBqEA7pb9k" src="https://buffer-media-uploads.s3.amazonaws.com/56c20bd3bd3816f63c94c73f/597120f6a73330a8620f1e50/output/thumbnail_00001.png"><div class="ZtQfhvw9JrWWR_5Qa435B">Looking for a good read? The top 5 books all marketers &amp; social media managers should have in their library 📚</div></div></div><div class="dyqfB7wI52x2Q7JRwpWjY"><div><div class="_2TDT-Zy_y1mPevH5OZMhTF"><span class="_2TfLWaII5umVAgsWIIlzUm"><span style="font-family: Roboto, sans-serif; font-size: 0.75rem; font-weight: 700; color: rgb(89, 98, 106);"><span>0</span></span><span style="font-family: Roboto, sans-serif; font-size: 0.75rem; font-weight: 400; color: rgb(89, 98, 106);"> clicks</span></span><span data-tip="Clicks" class="_4b6RTVkkgf9n4aTocZMpa" style="background-color: rgb(152, 232, 178); width: 0%;"></span></div></div><div><div class="_2TDT-Zy_y1mPevH5OZMhTF"><span class="_2TfLWaII5umVAgsWIIlzUm"><span style="font-family: Roboto, sans-serif; font-size: 0.75rem; font-weight: 700; color: rgb(89, 98, 106);"><span>24</span></span><span style="font-family: Roboto, sans-serif; font-size: 0.75rem; font-weight: 400; color: rgb(89, 98, 106);"> retweets</span></span><span data-tip="Retweets" class="_4b6RTVkkgf9n4aTocZMpa" style="background-color: rgb(253, 143, 144); width: 18.1818%;"></span></div></div><div><div class="_2TDT-Zy_y1mPevH5OZMhTF"><span class="_2TfLWaII5umVAgsWIIlzUm"><span style="font-family: Roboto, sans-serif; font-size: 0.75rem; font-weight: 700; color: rgb(89, 98, 106);"><span>69</span></span><span style="font-family: Roboto, sans-serif; font-size: 0.75rem; font-weight: 400; color: rgb(89, 98, 106);"> likes</span></span><span data-tip="Likes" class="_4b6RTVkkgf9n4aTocZMpa" style="background-color: rgb(143, 198, 219); width: 52.2727%;"></span></div></div></div><div class="dyqfB7wI52x2Q7JRwpWjY"><div><div class="_2TDT-Zy_y1mPevH5OZMhTF"><span class="_2TfLWaII5umVAgsWIIlzUm"><span style="font-family: Roboto, sans-serif; font-size: 0.75rem; font-weight: 700; color: rgb(89, 98, 106);"><span>30.1k</span></span><span style="font-family: Roboto, sans-serif; font-size: 0.75rem; font-weight: 400; color: rgb(89, 98, 106);"> impressions</span></span><span data-tip="Impressions" class="_4b6RTVkkgf9n4aTocZMpa" style="background-color: rgb(254, 199, 139); width: 65.0946%;"></span></div></div></div></li></ul></aside></section>
    </div>
  </html>
`;

const { document } = (new JSDOM(fullReport)).window;
const page = document.getElementById('report-page');
Object.defineProperty(Object.getPrototypeOf(page), 'clientHeight', {
  get: () => 1600,
  configurable: true,
});
Object.defineProperty(Object.getPrototypeOf(page.getElementsByTagName('section')[0]), 'clientHeight', {
  get: () => 1200,
  configurable: true,
});
Object.defineProperty(Object.getPrototypeOf(page.getElementsByTagName('li')[0]), 'clientHeight', {
  get: () => 150,
  configurable: true,
});

export default page;
