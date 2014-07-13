IGNORE_FILES ?= true
VERSION ?= dev
prepare-%:
	git fetch && git reset --hard origin/master
	mkdir -p $(MANUAL_SRC_DIR)
	mkdir -p $(MANUAL_FILES_DIR)
	mkdir -p $(API_DIR)

commit-%:
	git add $(MANUAL_SRC_DIR) \
	  && ($(IGNORE_FILES) || git add $(MANUAL_FILES_DIR)) \
	  && git add $(API_DIR) \
	  && ( ( git commit -m `git log -n 1 --format=$*-%h` \
	         && git pull \
	         && git push 'git@github.com:ocsigen/ocsigen.org-data' ) \
	       || echo "nothing to update" )

all-aux-%:
	$(MAKE) prepare-$*
	$(MAKE) copy-$*
	[ "$(JENKINS_COMMIT_DOC)" != "yes" ] || $(MAKE) commit-$*

all-%:
	[ -d $* ] && [ -d $(REPO_PATH) ]
	$(MAKE) \
	  API_DIR=$*/$(VERSION)/api \
	  MANUAL_DIR=$*/$(VERSION)/manual \
	  MANUAL_SRC_DIR=$*/$(VERSION)/manual/src \
	  MANUAL_FILES_DIR=$*/$(VERSION)/manual/files \
	  all-aux-$*

##############

copy-js_of_ocaml:
	$(MAKE) -C $(REPO_PATH)/doc clean
	$(MAKE) -C $(REPO_PATH)/doc doc
	$(MAKE) -C $(REPO_PATH)/doc wikidoc
	cp -Rf $(REPO_PATH)/doc/manual/* $(MANUAL_DIR)/
	cp -Rf $(REPO_PATH)/doc/api/wiki/*.wiki $(API_DIR)/

copy-eliom:
	$(MAKE) -C $(REPO_PATH) wikidoc
	cp -Rf $(REPO_PATH)/doc/manual-wiki/*.wiki $(MANUAL_SRC_DIR)
	mkdir -p $(API_DIR)/server $(API_DIR)/client
	cp -Rf $(REPO_PATH)/_build/src/lib/server/api.wikidocdir/*.wiki $(API_DIR)/server/
	cp -Rf $(REPO_PATH)/_build/src/lib/client/api.wikidocdir/*.wiki $(API_DIR)/client/
	cp -Rf $(REPO_PATH)/doc/index.wiki $(API_DIR)/

copy-tyxml:
	$(MAKE) -C $(REPO_PATH) wikidoc
	cp -Rf $(REPO_PATH)/doc/manual-wiki/*.wiki $(MANUAL_SRC_DIR)
	cp -Rf $(REPO_PATH)/_build/tyxml-api.wikidocdir/*.wiki $(API_DIR)

copy-lwt:
	cd $(REPO_PATH) \
	&& rm -rf _build/lwt-api.wikidocdir \
	&& ocamlbuild lwt-api.wikidocdir/index.wiki
	cp -Rf $(REPO_PATH)/manual/*.wiki $(MANUAL_SRC_DIR)
	cp -Rf $(REPO_PATH)/_build/lwt-api.wikidocdir/*.wiki $(API_DIR)

copy-deriving:
	cd $(REPO_PATH) \
	&& rm -rf _build/deriving-api.wikidocdir \
	&& ocamlbuild deriving-api.wikidocdir/index.wiki
	cp -Rf $(REPO_PATH)/doc/manual-wiki/*.wiki $(MANUAL_SRC_DIR)
	cp -Rf $(REPO_PATH)/_build/deriving-api.wikidocdir/*.wiki $(API_DIR)

copy-ocsigenserver:
	$(MAKE) -C $(REPO_PATH)/doc clean
	$(MAKE) -C $(REPO_PATH)/doc doc
	$(MAKE) -C $(REPO_PATH)/doc wikidoc
	cp -Rf $(REPO_PATH)/doc/api-wiki/*.wiki $(API_DIR)
	cp -Rf $(REPO_PATH)/doc/manual-wiki/*.wiki $(MANUAL_SRC_DIR)/

copy-eliom-base-app:
	$(MAKE) -C $(REPO_PATH) doc
	mkdir -p $(API_DIR)/server $(API_DIR)/client
	cp -Rf $(REPO_PATH)/doc/client/wiki/*.wiki $(API_DIR)/client
	cp -Rf $(REPO_PATH)/doc/server/wiki/*.wiki $(API_DIR)/server
	cp -Rf $(REPO_PATH)/doc/manual-wiki/*.wiki $(MANUAL_SRC_DIR)/

copy-eliom-widgets:
	$(MAKE) -C $(REPO_PATH) doc
	mkdir -p $(API_DIR)/server $(API_DIR)/client
	cp -Rf $(REPO_PATH)/doc/client/wiki/*.wiki $(API_DIR)/client
	cp -Rf $(REPO_PATH)/doc/server/wiki/*.wiki $(API_DIR)/server
	cp -Rf $(REPO_PATH)/doc/manual-wiki/*.wiki $(MANUAL_SRC_DIR)/

copy-ocsimore:
	rm -rf $(REPO_PATH)/_build/api.wikidocdir
	make -C $(REPO_PATH) wiki-api
	cp -Rf $(REPO_PATH)/_build/api.wikidocdir/*.wiki $(API_DIR)
	cp -Rf $(REPO_PATH)/doc/manual-wiki/*.wiki $(MANUAL_SRC_DIR)/

copy-ojquery:
	$(MAKE) -C $(REPO_PATH) wikidoc
	cp -Rf $(REPO_PATH)/_build/ojquery-api.wikidocdir/*.wiki $(API_DIR)


copy-ojwidgets:
	$(MAKE) -C $(REPO_PATH) wikidoc
	cp -Rf $(REPO_PATH)/_build/ojwidgets-api.wikidocdir/*.wiki $(API_DIR)
	cp -Rf $(REPO_PATH)/doc/manual-wiki/*.wiki $(MANUAL_SRC_DIR)/
