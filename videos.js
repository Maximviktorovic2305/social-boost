const videos = [
   {
      title: "Зомби",
      thumbnail:
         "https://s106vlx.storage.yandex.net/rdisk/0eb8d08a411230fa207ad72c7d677c701ab8b7ad67328d88c09b893f12efd005/6629d5d9/p7F-aiTmywLIO0-zbK3jyveOwf3yXLQKy_hzIS6Ia0NP1O43K_8uywfYVFUu1esKiKsLKHCzdM0RcQIbCRHTCg==?uid=0&filename=1.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&fsize=531092&hid=e4ae1684b693267f8fe021d37500f49f&media_type=image&tknv=v2&etag=0735b1bc48a174b7e7f8a665c85221bb&ts=616e3db4e6840&s=be0cb2d18792cd58fb7ef0c0b6795b8e3cee8cfc430d79dfd2b3bc73e7e42b99&pb=U2FsdGVkX1-8QlpWrPoZcCmFCueSSGCmBnkAX8oojCZDgbhBCxpA_X9qgt571xs0T7w5YnOtSF-dC6P6axJvyCNq9yrbIyjWmjnKKlYDUag",
      video: "https://disk.yandex.ru/i/6y97bH-YsMp91g",
      prompt: "Зомби в здании",
   },
   {
      title: "Скейт",
      thumbnail:
         "https://s632sas.storage.yandex.net/rdisk/c9950df98628388a7d1fea3b9d95b1a6d96fa34a93686e8a053881f69d21bae3/6629d629/p7F-aiTmywLIO0-zbK3jyoPcYGYd_fEgOia0Vq-rInUamXPYq7JIZa1QXVF9oLPbaUmTQTnMf7gjSN1-d_of1w==?uid=0&filename=2.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&fsize=455325&hid=321e5529fc3b3e9159782c05093e7dbd&media_type=image&tknv=v2&etag=03edc1a7a03ed680fa2218a772d29fc4&ts=616e3e0131c40&s=420088d991f0fa9c7df5a97544815cb8486a2f6b7b656083286a568634bef527&pb=U2FsdGVkX19NDtv2bSKl3xOsdUY6HCat5UrrXRePyQsXjwuQAmHKZJxm6VmSPcuW_ULn-gIIG9Z-aC92xDg8t-KIcmDlwPVtkD5Mrb2nQek",
      video: "https://disk.yandex.ru/i/vGe8BI-vrWvgeg",
      prompt: "Забавное видео молодого человека со скейтом",
   },
   {
      title: "Зомби на скамейке",
      thumbnail:
         "https://s575vla.storage.yandex.net/rdisk/5ea53468a56754de7b159907b98a7112671d1f9189441f8d6772e067d1f334f1/6629d63f/p7F-aiTmywLIO0-zbK3jyoX-9vwnpdxKTqdHjJf1wPv1O8OIL4McF60xY2PWD5xZK9QBB8j3PDRtpUWvrdDblg==?uid=0&filename=3.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&fsize=514131&hid=5f5ccf963d89fb73413092f773baed20&media_type=image&tknv=v2&etag=be1d56a5463b6a5c9fc354e645c8916a&ts=616e3e162cdc0&s=55e6bab0466f12c2c637b0be9430f2a8183df6111e9ea7f783d54bf5fb869a43&pb=U2FsdGVkX193oPKPpWlxw3P8yn_1_1oOH1rOqVUM7O7u23UjfmCbqr0LO6BCe4ehgQ9iAz1ZfyJ0I_MfYsBcxdR6XGlyw3Avbjz905pKpQ4",
      video: "https://disk.yandex.ru/i/xu-ODNM3Cjxy-g",
      prompt: "Забавное видео молодого человека в костюме зомби",
   },
   {
      title: "Клоун",
      thumbnail:
         "https://s444vlx.storage.yandex.net/rdisk/a19debb803e8040196dbfb667ec9090b6b04e8479dd13db743d58e400897f50c/6629d64e/p7F-aiTmywLIO0-zbK3jyodcjBOs5uE5wCpp5LbVd2Deu6VaCQZjsQq-6Nz8sPWFnyYpTmObd2kg7AjH-PvB-g==?uid=0&filename=4.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&fsize=556338&hid=ea2eac796be7c24fca819a8686632e78&media_type=image&tknv=v2&etag=4aeaf4881867862ef664caba75a678f9&ts=616e3e247af80&s=c1849471da6d9684db37ca43decb77bca7cbcaa94d0bf50ccb0f1be6b9832d2c&pb=U2FsdGVkX192ouvalGvFod5gsR9FbbCkSLkMtqKf0uPqwyaiqpG37QrFPEyoFzth-30IB8gu4PdZo5dUWgsUEXNH_tQ0Min-4lJvdwb_KtQ",
      video: "https://disk.yandex.ru/i/JSRFNw_dxkKU0w",
      prompt: "Забавное видео клоуна",
   },
   {
      title: "Мини космонавт",
      thumbnail:
         "https://s402sas.storage.yandex.net/rdisk/2f6cde1b6fda5761da0c8d9e35b1805d6bbc3194132f3ca558368a5302a114b0/6629d661/p7F-aiTmywLIO0-zbK3jysnzELK6dB0alIXwhC_0GEWlWOZRk1iKyVj981rKaqaTEscmwB7dysTygse8ywhsXg==?uid=0&filename=5.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&fsize=564769&hid=818898d3f421ec5ff0a50d26e0524224&media_type=image&tknv=v2&etag=042df85f99b17450a6807fd1899d79d6&ts=616e3e3699a40&s=54b16e43b63b73b6b473adbd7b9b7f5e8598002b4f53e37568f7fa9a480aa8c6&pb=U2FsdGVkX19-oLcLZZiTWHLW6uWaNwKHo6mF42tPyb__zHktfbC89T24PRWT5Z4X4oksxaK1l0A0anBxERQZdGBSzRu6A6mHzVu8eL2HFiI",
      video: "https://disk.yandex.ru/i/DaZsLZXwFbYGoQ",
      prompt: "Забавное видео космонавта",
   },
   {
      title: "Совместное фото",
      thumbnail:
         "https://s66klg.storage.yandex.net/rdisk/155290c2dcdc044caa2b1c307be901a3c6a0ff97564a632a8416496d1e37612f/6629d672/p7F-aiTmywLIO0-zbK3jynvOFs8CFYINizHAnqo4FR3Aib6lfbopBuNbhq1h3iN8LJpSJIJbVRBQJXNS5cmXYw==?uid=0&filename=6.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&fsize=503339&hid=77171b191a40bb61bc0cd11e50741365&media_type=image&tknv=v2&etag=b93b81d86a94f83cc8022b0beecab516&ts=616e3e46d0080&s=9488282de313aec33b720864930e8f6b05e1dfc720490ba35316742da9533b56&pb=U2FsdGVkX19G1nTHVwoAt8c7B0Fz7RrzGLNx3xIDzYo-45WrFVIC6qafdx7sXilXEZSBfy8-r3EZFpluffa1tx4LMukyJ_O3IQbSHNDhHKw",
      video: "https://disk.yandex.ru/i/y52DYRMk9fAAXA",
      prompt: "Совместное фото танцовщиц",
   },
   {
      title: "Helloween",
      thumbnail:
         "https://s616vla.storage.yandex.net/rdisk/8bc1ae2005ad871e0a784b120beb3a8ebfb555096504e836d20af9444408be5d/6629d688/p7F-aiTmywLIO0-zbK3jygx_EoPrKbq0xOYpnP571SVGPBPnGZUQEjgdfXd6qEnkCXQ8Y--3YaJjNfOXuL_4WA==?uid=0&filename=7.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&fsize=590633&hid=1261d919cb6a40f6aefe37bbd220b13d&media_type=image&tknv=v2&etag=e15d5cb8efc6c48f4f0cbdc3a9b5acfd&ts=616e3e5bcb200&s=a4e9442eb1cf5be30ce47e157f76438b500f7322963bb5a9af664232a1bd13d8&pb=U2FsdGVkX18e51wKa-IAcF7mGcjfrajFcRvVRMWyqUpFEUwQCFfN8LVylUFQ9Wgsbd4Mienm_gbwDAltt8gRjy2CKX4UX2mZvqUrvSL8nwM",
      video: "https://disk.yandex.ru/i/NgMfNDyT80girw",
      prompt: "Совместное фото на helloween",
   },
   {
      title: "Танец",
      thumbnail:
         "https://s335myt.storage.yandex.net/rdisk/4db2bbb6a11fd992ddc6c067910ced749a441d44a0f664c51377f93a28f8d9b9/6629d696/p7F-aiTmywLIO0-zbK3jyj9ir4bUU4gk7tdRPhfvKqklPWJqw9P9L8DyUb_1WIx0MAD6Ffozf7IYe_kEMX_gKQ==?uid=0&filename=8.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&fsize=444395&hid=135cfe49ff5c4533318645328bdb654a&media_type=image&tknv=v2&etag=97c1f06c40178b98794771c0cdeb0141&ts=616e3e6925180&s=218bdac3557a7b97439168cb38df38b073bec7cc78e013ce525fdd9363ae548e&pb=U2FsdGVkX1_mxlB-fmooCtiwXvNsr8PHYGBXOkWJbnK66734wJ2GYdJsI0mbTmojNEFWAo3BM7n6MP3_4u4GF6oy0xE0LTc96w1HFK7dUZ8",
      video: "https://disk.yandex.ru/i/XHY9GV_aNPu-hA",
      prompt: "Совместный танец",
   },
   {
      title: "Танец соло",
      thumbnail:
         "https://s76sas.storage.yandex.net/rdisk/b4fd4df22d1004cd3e7daeb5fb7b20f2f036bd37c0e61370762c37a74c31a392/6629d6a3/p7F-aiTmywLIO0-zbK3jynnLB4v24ntmjmPFpFZX-euWiJNnDcidfjXTnO_CubivS9pu07l18G_dx1g6sXhzNg==?uid=0&filename=9.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&fsize=420261&hid=02e650acb8fda9b9d55ac9717f96ac7b&media_type=image&tknv=v2&etag=44260bd5611fe09e9dc24f154ca902ed&ts=616e3e758aec0&s=07048e0c6fc561bc29d00f5b790140ba0571c9e4e871ee74284df4237ae5261f&pb=U2FsdGVkX184SNYIsdGn03q9Ewdk0q17vADMP8ai-AI_IuGAgpuVRUEPif_2ozFwW8lmmKr1midnrIXdiZOWVXrw7vjxIWueAak7kS8B-iI",
      video: "https://disk.yandex.ru/i/KDee_vSxXdnK7Q",
      prompt: "Танец молодого человнка в истерике",
   },
   {
      title: "Собака любит играть",
      thumbnail:
         "https://s172vla.storage.yandex.net/rdisk/453276cd58eb8fd8982f66885e5992092a8e6998cd859fd2f0e31a234baa74de/6629d6b1/p7F-aiTmywLIO0-zbK3jyin_dj6v_nhkAhgzTxn2ItgKryDIhgWxvMre3kJGRlKLJKiBgFIE0i9aBMyOKhD8Pw==?uid=0&filename=10.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&fsize=417779&hid=fdce54205c99564c0781abcd6e7c3ffd&media_type=image&tknv=v2&etag=40fcc7ce2ff8982473479eaee0c6452b&ts=616e3e82e4e40&s=a08ba07f00561f2050bd020a00b597f7a0e3bffb1305580173976a45d816a3c4&pb=U2FsdGVkX19f1Cxrp1rZUh0Y9y41SUZeW3q09A9mTP0063c_jfLcoDUZshOtJUujgxWToBHI09t0RRL-DpcIatms6wCMoZLwVTQQc2EPqs0",
      video: "https://disk.yandex.ru/i/oTds2L6jCmfWiw",
      prompt: "Собака играет со своим хозяином",
   },
   {
      title: "Семейные будни",
      thumbnail:
         "https://s409sas.storage.yandex.net/rdisk/25d6ce8d17b2d8a4a61dd07a23bae2373bed91ef0cb0e26f9990b7d3a9938283/6629d6bf/p7F-aiTmywLIO0-zbK3jyp4fKFbKoTcqd1LniBemr7XCYE-nyRmJ3uVMoQZywsev5AF_tvFzpLOBp9eneE6GyQ==?uid=0&filename=11.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&fsize=357734&hid=6432e11e17663ea54e0ef68f9c037a33&media_type=image&tknv=v2&etag=e064f63d5bd3ddda73d7e39fc96c28e1&ts=616e3e903edc0&s=7744eb84c569b2e2014248ed5b70dfe748427c9864776f597193ed7474b0bfc7&pb=U2FsdGVkX19nPS8MCWjk2c8MyFi2ACJIuQYcVfcTw-vGaNnP4lv3Y6fpDghXUzt6gkrnXhq-FANcKeXA33PCSmoDJMWSBGKNYeIYBsZp1IA",
      video: "https://disk.yandex.ru/i/o99xN91lQjnHZQ",
      prompt: "Будни семьи",
   },
];
