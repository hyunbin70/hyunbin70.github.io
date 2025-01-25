---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

I am a Ph.D. student at [AMILAB](https://ami.postech.ac.kr/) in Electrial Engineering at [POSTECH](https://postech.ac.kr/eng/), advised by [Tae-Hyun Oh](https://ami.postech.ac.kr/members/tae-hyun-oh). I received my bachelor's degrees in Physics and Electrical Engineering (Double major) from Chung-Ang University.
I work on research projects at the intersection of computer vision and machine learning, with a focus on modalities that contain temporal information, such as video and audio.

My research interests are on multi-modal learning, especially within **audio-visual understanding and generation**, but not limited to.

<!-- My research interest includes neural machine translation and computer vision. I have published more than 100 papers at the top international AI conferences with total <a href='https://scholar.google.com/citations?user=DhtAFkwAAAAJ'>google scholar citations <strong><span id='total_cit'>260000+</span></strong></a> (You can also use google scholar badge <a href='https://scholar.google.com/citations?user=DhtAFkwAAAAJ'><img src="https://img.shields.io/endpoint?url={{ url | url_encode }}&logo=Google%20Scholar&labelColor=f6f6f6&color=9cf&style=flat&label=citations"></a>). -->


# 🔥 News
- *2025.01*: One paper has been accepted to **ICLR 2025**. 
- *2024.07*: One paper has been accepted to **ECCV 2024**. 
- *2024.06*: Two papers have been accepted to **INTERSPEECH 2024**.
- *2024.04*: One paper has been accepted to **RA-L 2024**. This will be presented in **IROS 2024** <span style="color: red;">(oral presentation)</span>.

# 📝 Pre-print

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Preprint</div><img src='images/lip_sync.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[P2] Speech-Driven 3D Talking Head Generation: New Definitions, Representation, and Metrics *<span style="color: gray;">(under-review)</span>*

**Project** 
- We introduce novel definitions, a speech-mesh representation space, and evaluation metrics for accurate 3D talking face generation.
</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Preprint</div><img src='images/real_mm.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[P1] [Revisiting Learning-based Video Motion Magnification for Real-time Processing](https://arxiv.org/abs/2403.01898) *<span style="color: gray;">(under-review)</span>*

Hyunwoo Ha\*, **<U>Oh Hyun-Bin</U>\***, Kim Jun-Seong, Kwon Byung-Ki, Kim Sung-Bin, Linh-Tam Tran, Ji-Yun Kim, Sung-Ho Bae, Tae-Hyun Oh (*: equal contribution)

**Project**
- We magnify invisible small motions, but in real-time.
- Short version at **CVPRW 2023** ‘Vision-based InduStrial InspectiON’ Workshop.

</div>
</div>


# 📝 Publications

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICLR 2025</div><img src='images/avh.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[C4] [AVHBench: A Cross-Modal Hallucination Evluation for Audio-Visual Large Language Models](https://openreview.net/pdf?id=jTEKTdI3K9)

Kim Sung-Bin\*, **<U>Oh Hyun-Bin</U>\***, JungMok Lee, Arda Senocak, Joon Son Chung, Tae-Hyun Oh (*: equal contribution)

[**Project**](https://github.com/AVHBench/AVHBench)
- We introduce a comprehensive benchmark specifically designed to evaluate the perception and comprehension capabilities of audio-visual LLMs.
</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ECCV 2024</div><img src='images/axial_mm.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[C3] [Learning-based Axial Video Motion Magnification](https://arxiv.org/abs/2312.09551)

Kwon Byung-Ki, **<U>Oh Hyun-Bin</U>**, Kim Jun-Seong, Hyunwoo Ha, Tae-Hyun Oh

[**Project**](https://axial-momag.github.io/axial-momag/)
- We magnify invisible small motions, but in user-specified directions.
</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">INTERSPEECH 2024</div><img src='images/av_guidance.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[C2] [Enhancing Speech-Driven 3D Facial Animation with Audio-Visual Guidance from Lip Reading Expert](https://arxiv.org/abs/2407.01034)

Han EunGi\*, **<U>Oh Hyun-Bin</U>\***, Kim Sung-Bin, Corentin Nivelet Etcheberry, Suekyeong Nam, JangHoon Ju, Tae-Hyun Oh (*: equal contribution)

[**Project**](https://3d-talking-head-avguide.github.io/)
- We generate speech-synchronized lip movements in 3D facial animation with audio-visual lip reading expert.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">INTERSPEECH 2024</div><img src='images/multitalk.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[C1] [MultiTalk: Enhancing 3D Talking Head Generation Across Languages with Multilingual Video Dataset](https://arxiv.org/abs/2406.14272)

Kim Sung-Bin\*, Lee Chae-Yeon\*, Gihun Son\*, **<U>Oh Hyun-Bin</U>**, JangHoon Ju, Suekyeong Nam, Tae-Hyun Oh

[**Project**](https://multi-talk.github.io/)
- We generate accurate 3D talking heads from multilingual speech.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">RA-L 2024</div><img src='images/Uni-DVPS.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[J1] [Uni-DVPS: Unified Model for Depth-Aware Video Panoptic Segmentation](https://ieeexplore.ieee.org/document/10517661)

Kim Ji-Yeon, **<U>Oh Hyun-Bin</U>**, Kwon Byung-Ki, Dahun Kim, Yongjin Kwon, Tae-Hyun Oh

[**Project**](https://jiyeon-k1m.github.io/uni-dvps)
- We present Uni-DVPS, a unified multi-task model for Depth-aware Video Panoptic Segmentation (DVPS).
- <span style="color: red;">Oral presentation</span> at **IROS 2024**
- Short version at **CVPRW 2023** ‘Vision-Centric Autonomous Driving (VCAD)’ Workshop.

</div>
</div>

<!-- - [Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet](https://github.com), A, B, C, **CVPR 2020** -->

# 🎖 Honors and Awards
- *2024*: Best Paper Award, KRoC
- *2023*: Best Paper Award, IPIU
- *2021*: Summa Cum Laude, Chung-Ang University
- *2021*: Department Honors Scholarship, Chung-Ang University
- *2018*: Science Scholarship, Suwon Municipal Scholarship Foundation
- *2017*: Department Honors Scholarship, Chung-Ang University

# 📖 Educations
- *2022.03 - Present*: Integrated Ph.D. in Electrical Engineering, Pohang University of Science and Technology (POSTECH), Pohang, South Korea
- *2017.03 - 2021.08*: B.S. in Physics & B.E. in Electrical Engineering, Chung-Ang University, Seoul, South Korea
  - *Summa Cum Laude*

# 🫡 Academic Services
- Conference Reviewer: ACCV
- Journal Reviewer: IJCV

# 🧑‍🏫 Teaching Experiences
- *2023*, NAVER Boostcamp AI Tech Computer Vision Track (5th, 6th)
- *2022*, Introduction to Machine Learning (EECE454), POSTECH


<!-- # 💬 Invited Talks
- *2021.06*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
- *2021.03*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.  \| [\[video\]](https://github.com/) -->

<!-- # 💻 Internships
- *2019.05 - 2020.02*, [Lorem](https://github.com/), China. -->