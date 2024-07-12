---
title: "Vessel distance mapping (VDM), vessel segmentation, and pattern assessment"
excerpt: "<img src='/images/research/vdm/VDM_hippo_crc.png'>"
permalink: /research/vessel_distance_mapping/
collection: research
order_number: 40
---

<img src="/images/research/vdm/VDM-pipeline_simple.png" width="350"/>

In our daily life, we associate relevance and closeness. VDM is inspired by this simple idea that vessel close to a region of interest are more relevant. VDM is a versatile tool for image post-processing to understand vessel patterns and their relation to physiology and pathologies. While originally developed for MRI, it is currently applied to other imaging modalities as well such as light sheet microscopy. Below you find an overview of VDM projects with a multitude of application to understand vessel patterns and their impact on physiology and pathologies. 

To perform vessel distance mapping, the vasculature needs to be segmented. While an active field of research, segmenting small vessels from high resolution 3D data is challenging (see our [vessel segmentation challenge](https://doi.org/10.7303/syn47164761)).


# Scientific contribution & selected publications

* Using VDM to show that hippocampal arterial supply patterns mediate vascular reserve in CSVD patients 
>Garcia-Garcia B*, **Mattern H***, Vockert N, Yakupov R, Schreiber F, Spallazzi M, Perosa V,
Haghikia A, Speck O, Düzel E, Maass A, Schreiber S.
*Vessel Distance Mapping: A novel methodology for assessing vascular-induced cognitive resilience.*
NeuroImage 2023
[DOI:10.1016/j.neuroimage.2023.120094](https://doi.org/10.1016/j.neuroimage.2023.120094)
*equal contribution

* Review on how the (micro)vasculature is impacting ALS disease progression. We discuss markers of how to assess the microvascular integrity with MRI (state of the art and promising new techniques) and how vascular supply patterns could play a role as a resistance or resilience mechanism in ALS.
> Schreiber S, Bernal J, Arndt P, Schreiber F, Müller P, Morton L, Braun-Dullaeus RC,
Valdés-Hernández MC, Duarte R, Wardlaw JM, Meuth SG, Mietzner G, Vielhaber S, Dunay
IR, Dityatev A*, Jandke S*, **Mattern H***.
*Brain Vascular Health in ALS Is Mediated through Motor Cortex Microvascular Integrity.*
Cells 2023
[DOI:10.3390/cells12060957](https://doi.org/10.3390/cells12060957);
*equal contribution

* Deep learning vessel segmentation pipeline with a focus on small cerebral vessels and mitigation of imperfect training data.
> Chatterjee S, Prabhu L, Pattadkal M, Bortsova G, Sarasaen C, Dubost F, **Mattern H**, de
Bruijne M, Speck O, Nürnberger A.
*DS6: Deformation-Aware Semi-Supervised Learning: Application to Small Vessel Segmentation with Noisy Training Data.*
Journal of Imaging 2022
[DOI: 10.3390/jimaging8100259](https://doi.org/10.3390/jimaging8100259)


* Showing how hippocampal vascularization patterns affect volume of brain regions beyond the hippocampus in aging.
> Vockert N, Perosa V, Ziegler G, Schreiber F, Priester A, Spallazzi M, Garcia-Garcia B, Aruci M, **Mattern H**, Haghikia A, Düzel E, Schreiber S, Maass A.
*Hippocampal vascularization patterns exert local and distant effects on brain structure but not vascular pathology in old age.*
Brain Communications, 2021
[DOI: 10.1093/braincomms/fcab127](https://doi.org/10.1093/braincomms/fcab127)

# Preprints 

* An openly available, deep learning-based vessel segmentation tool box.
> Xu M, Ribeiro FL, Barth M, Bernier M, Bollmann S, Chatterjee S, Cognolato F, Gulban OF, Itkyal V, Liu S, **Mattern H**, Polimeni JR,  Shaw TB, Speck O, Bollmann S.
*VesselBoost: A Python Toolbox for Small Blood Vessel Segmentation in Human Magnetic Resonance Angiography Data*. [DOI: 10.1101/2024.05.22.595251](https://doi.org/10.1101/2024.05.22.595251) 

* Classifying arterial and venous patterns in the putamen with VDM.
> **Mattern  H**, Garcia-Garcia  B,  Böwe  S,  Mietzner  G,  Henneicke  S,  Speck  O,  Schreiber  S.
*Vessel  distance  mapping  reveals  mesoscopic  arterial  and  venous patterns  in  the putamen*. [DOI: 10.5281/zenodo.8098900](https://doi.org/10.5281/zenodo.8098900) 

* Assessing aging-incuded changes in the micrstructure and its interdependency with the venous vasculature.
> Knoll C, Döhler J, Northall A, Schreiber S, **Mattern H**, Kuehn E. *Age-Related Differences in   Human   Cortical   Microstructure   Depend   on   Distance   to   Nearest   Vein* 
[DOI: 10.2139/ssrn.4435790](https://doi.org/10.2139/ssrn.4435790)

* Applying VDM to microscopy images to study inflammation and cognitive dysfunction in a CSVD rat model.
> Ulbrich P, Morton L, Briese M, Lämmlin N, **Mattern H**, Hasanuzzaman Md, Westhues M, Khoshneviszadeh   M,  Appenzeller  S,  Gündel  D,  Toussaint  M, Brust  P,  Kniess  T, Oelschlegel  A,  Goldschmidt  J,  Meuth  S,  Heinze  HJ,  Debska-Vielhaber  G,  Vielhaber  S, Becker A, Dityatev A, Jandke S, Sendtner M, Dunay I, Schreiber S. 
*Vascular and neural transcriptomics   reveal   stage-dependent   pathways   to   inflammation   and   cognitive dysfunction in a rat model of hypertension*
[DOI: 10.1101/2023.01.20.524921](https://doi.org/10.1101/2023.01.20.524921)

# Vessel segmentation challenge:
* SMILE-UHURA: Small  Vessel  Segmentation  at  MesoscopIc  ScaLEfrom  Ultra-High ResolUtion 7T Magnetic Resonance Angiograms
  * Organizers:  Chatterjee  S, **Mattern  H**,  Dubost  F,  Schreiber  S,  Nürnberger  A,  Speck  O; 
  * Conference: IEEE -ISBI 2023, Cartagena de Indias, Colombia: 
  * [DOI: /10.7303/syn47164761](https://doi.org/10.7303/syn47164761)


# Open source and publicly available data

* [Vessel distance mapping (VDM) source code](https://github.com/hendrikmattern/VesselDistanceMapping)
* [Vessel segmentation source code (OMELETTE)](https://gitlab.com/hmattern/omelette)
* [Benchmark vessel     segmentation     data     from     the     SMILE-UHURA     challenge](https://doi.org/10.7303/syn471647614.DS6 )
* [DS6 vessel segmentation source code](https://github.com/soumickmj/DS6)