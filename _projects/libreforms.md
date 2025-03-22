---
layout: page
title: libreforms
description: Abstract and flexible open-source form management software.
importance: 1
category: technology
# related_publications: einstein1956investigations, einstein1950meaning
---

<hr>

Since about 2022, I have been working on an open-source project called libreforms, which implements a specification I wrote under the same name that combines a form configuration language and an associated API that is optimized for managing institutional forms over a network. The point of the project is to save bureaucracies from becoming The Place That Sends You Mad.

[The Place That Sends You Mad](https://asterix.fandom.com/wiki/The_Place_That_Sends_You_Mad) is a bureaucratic office building from "The Twelve Tasks of Asterix" where Asterix and Obelix must obtain a Permit A-38 by navigating a maze of offices and unhelpful staff. Ultimately, they only succeed when Asterix invents a fake permit that throws the entire bureaucracy into chaos, forcing the supervisor to issue the permit before himself going mad.

Modern bureaucracies often rely on complex processes that tend to send you mad. These processes are typically built around the idea of institutional forms, a type of data that has a tendency to require multiple users with varying institutional roles to repeatedly access and modify individual records in processes that vary in their formality and clarity, and which tend to change over time as formal organizational goals change or the cadres of people that make these organizations up shift in their composition. These are sometimes hand-written forms, which are prone to human-error. Often, they are PDF documents, which can be somewhat clunky to store and maintain. Wouldn't it be nice if we could make this process better? That's where libreforms comes in handy. It is purpose-built to manage data in bureaucratic environments while keeping forms simple and flexible to changes in form structure, data models, or business processes.

I've implemented this system in Python twice: first, as a Flask UI; second, as using FastAPI and Pydantic to create an asynchronous API and a UI built almost entirely on top of this API. The latter project remains actively maintained by me and is used by multiple organizations. You can find the links to these applications, as well as my other coding projects, under the [repositories](https://signebedi.github.io/repositories/) page of this website. I welcome contributions in the form of pull requests and GitHub Issues, and encourage you to try out the libreforms-fastapi project by installing it into a Python virtual environment on your computer. You can find instructions for it on its [GitHub page](https://github.com/signebedi/libreforms-fastapi).
