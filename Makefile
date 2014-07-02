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
	&& ( (git commit -m `git log -n 1 --format=$*-%h` && git push) || echo "nothing to update" )

all-aux-%:
	$(MAKE) prepare-$*
	$(MAKE) copy-$*
	$(MAKE) commit-$*

all-%:
	ls $* && ls $(REPO_PATH)
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
	$(MAKE) -C $(REPO_PATH)/doc docwiki
	cp -Rf $(REPO_PATH)/doc/manual/* $(MANUAL_DIR)/
	cp -Rf $(REPO_PATH)/doc/api/wiki/* $(API_DIR)/

copy-eliom:
	$(MAKE) -C $(REPO_PATH) wikidoc
	cp -Rf $(REPO_PATH)/doc/manual-wiki/* $(MANUAL_SRC_DIR)
	mkdir -p $(API_DIR)/server $(API_DIR)/client
	cp -Rf $(REPO_PATH)/_build/src/lib/server/api.wikidocdir/* $(API_DIR)/server/
	cp -Rf $(REPO_PATH)/_build/src/lib/client/api.wikidocdir/* $(API_DIR)/client/
	cp -Rf $(REPO_PATH)/doc/index.wiki $(API_DIR)/

copy-tyxml:
	$(MAKE) -C $(REPO_PATH) wikidoc
	cp -Rf $(REPO_PATH)/doc/manual-wiki/* $(MANUAL_SRC_DIR)
	cp -Rf $(REPO_PATH)/_build/tyxml-api.wikidocdir/* $(API_DIR)
